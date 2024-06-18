import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono();
const prisma = new PrismaClient({
  datasourceUrl: 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNWE5NjhhMDAtODQ5Ni00MGJhLWFlMzMtNTJjMmJiMDI2MjY2IiwidGVuYW50X2lkIjoiYTI4OTE2MGU1ZTc5NGIwNzVmYTMzYzhiNjNmMjFiN2E0ZDkzY2FlMWYzMzEyZGYxZTM3ODA2YzQ5Njg5YThhZiIsImludGVybmFsX3NlY3JldCI6IjdkYzQ2NDNiLTdiNTUtNDlhZC1hZDE0LTM2ZGNiZmY4MTQ0MiJ9.Z4CXgxyRgA4dxX3c-xX5lQRVpG7iscvjJu4h86ar1w',
}).$extends(withAccelerate());

// get routes
app.get("/", async (c) => {
    const allUsers = await prisma.user.findMany();
    return c.json(allUsers);
});

app.get("/api/v1/blog/:id", (c) => {
    return c.json(c.req.path);
});

app.get("/api/v1/blog/bulk", (c) => {
    return c.json(c.req.path);
});

// post routes
app.post("/api/v1/user/signup", (c) => {
    return c.json(c.req.path);
});

app.post("/api/v1/user/signin", (c) => {
    return c.json(c.req.path);
});

app.post("/api/v1/blog", (c) => {
    return c.json(c.req.path);
});

// put routes
app.put("/api/v1/blog", (c) => {
    return c.json(c.req.path);
});

export default app;
