import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
    const res = await prisma.user.update({
        where: {
            email: "vicky@gmail.com",
            // name: "abc",
        },
        data: {
            email: "ritik@gmail.com",
        },
    });
    return res;
}

main()
    .then((data) => {
        console.log("Done \n", data);
        prisma.$disconnect;
    })
    .catch((err) => {
        console.log("error occur \n", err);
        prisma.$disconnect;
    });
