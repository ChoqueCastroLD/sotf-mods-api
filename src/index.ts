import { Elysia } from 'elysia'

import { router } from './router'
import { errorHandler } from './handlers/error.handler'


const app = new Elysia()
    .use(errorHandler)
    .use(router)
    .listen(Bun.env.PORT ?? 3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)