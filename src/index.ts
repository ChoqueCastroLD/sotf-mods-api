import { Elysia } from 'elysia'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const app = new Elysia()
    .get('/', async () => {
        let count = await prisma.category.count();
        return count + "c";
    })
    .listen(3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)