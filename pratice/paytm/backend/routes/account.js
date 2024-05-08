const express = require("express");
const { authMiddleware } = require("../middleware");
const { Bank, User } = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        message: "working fine",
    });
});

router.get("/balance", authMiddleware, async (req, res) => {
    let user = await User.findOne({
        username: req.username,
    });
    if (user._id) {
        let bankDetails = await Bank.findOne({
            userId: user._id,
        });
        if (bankDetails) {
            return res.status(200).json({
                balance: bankDetails.balance,
            });
        }
    }
    res.status(400).json({
        message: "username not valid",
    });
});

router.post("/transfer", authMiddleware, async (req, res) => {
    try {
        const sender = await User.findOne({ username: req.username });
        if (!sender) {
            return res.status(404).json({ message: "Sender not found" });
        }

        const senderBankDetails = await Bank.findOne({ userId: sender._id });
        if (!senderBankDetails) {
            return res
                .status(404)
                .json({ message: "Sender bank details not found" });
        }

        if (senderBankDetails.balance < req.body.balance) {
            return res.status(400).json({ message: "Insufficient balance" });
        }

        const recipient = await User.findOne({ username: req.body.to });
        if (!recipient) {
            return res.status(404).json({ message: "Recipient not found" });
        }

        const recipientBankDetails = await Bank.findOne({
            userId: recipient._id,
        });
        if (!recipientBankDetails) {
            return res
                .status(404)
                .json({ message: "Recipient bank details not found" });
        }

        const session = await Bank.startSession();
        try {
            session.startTransaction();
            recipientBankDetails.balance += req.body.balance;
            await recipientBankDetails.save().session(session);
            senderBankDetails.balance -= req.body.balance;
            await senderBankDetails.save().session(session);
            // throw new Error("sample");
            
            await session.commitTransaction();

            res.status(200).json({
                message: `Transaction successful. Rs ${req.body.balance} transferred from ${sender.username} to ${recipient.username}`,
            });
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.stack });
    }
});

module.exports = router;
