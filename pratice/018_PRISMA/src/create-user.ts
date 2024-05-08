import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "Pratik Sontakke",
            email: "psontakke@prisma.io",
        },
    });
}

main()
    .then(async () => {
        console.log("Done with the query");
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
