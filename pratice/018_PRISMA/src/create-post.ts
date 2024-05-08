import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
    await prisma.post.create({
        data: {
            title: "title of post 2",
            content: "pratik's content",
            published: true,
            author: {
                connect: {
                    id: 3,
                },
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
