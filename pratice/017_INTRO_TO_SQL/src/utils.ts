import { Client } from "pg";

/* 
export async function getClient() {
    const client = new Client(
        "postgres://wzsxsnxg:LHZ9Cv4QoZ1zctxapkOq2ch672-o9UQe@trumpet.db.elephantsql.com/wzsxsnxg"
    );
    await client.connect();
    return client;
} 
*/

export async function getClient() {
    const client = new Client({
        user: "postgres",
        host: "localhost",
        database: "master",
        password: "root",
        port: 5432,
    });
    await client.connect();
    return client;
}
