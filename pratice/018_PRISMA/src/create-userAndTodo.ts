import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
    await prisma.user.create({
        data: {
            email: "vicky@gmail.com",
            name: "Vicky Sontakke",
            posts: {
                create: [
                    {
                        title: "title of post 1",
                        content: "Vicky's content 1",
                        published: false,
                    },
                    {
                        title: "title of post 2",
                        content: "Vicky's content 2",
                        published: true,
                    },
                ],
            },
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
