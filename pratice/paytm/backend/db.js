const mongoose = require("mongoose");
const z = require("zod");

async function main() {
    await mongoose.connect(
        "mongodb+srv://pratik_01:DifSqcSzFRZWFp50@cluster1.xivzpxs.mongodb.net/paytm_app"
    );
}

main()
    .then(() => {
        console.log("Successfully connected to DB...");
    })
    .catch((err) => {
        console.log("Got error while connecting to mongoDB" + err);
    });

const userSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String,
});

const UserZod = z.object({
    username: z
        .string()
        .toLowerCase()
        .trim()
        .min(1, { message: "Must be 1 or more characters long" })
        .max(20, { message: "Must be 20 or more characters long" })
        .email({ message: "Invalid email address" }),
    firstName: z
        .string()
        .toLowerCase()
        .trim()
        .min(1, { message: "Must be 1 or more characters long" })
        .max(20, { message: "Must be 20 or more characters long" }),
    lastName: z
        .string()
        .toLowerCase()
        .trim()
        .min(1, { message: "Must be 1 or more characters long" })
        .max(20, { message: "Must be 20 or more characters long" }),
    password: z
        .string()
        .trim()
        .min(6, { message: "Must be 6 or more characters long" })
        .max(10, { message: "Must be 10 or more characters long" }),
});

const updateUserBody = z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});

const User = mongoose.model("User", userSchema);
module.exports = { User, UserZod, updateUserBody };
