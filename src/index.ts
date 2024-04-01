import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'

import { router } from './router'
import { errorHandler } from './handlers/error.handler'
import { loggerPlugin } from "./plugins/logger.plugin"


const app = new Elysia()
    .use(swagger({ path: '/api/docs' }))
    .use(cors())
    .use(loggerPlugin)
    .use(errorHandler)
    .use(router)
    .listen(Bun.env.PORT ?? 3000)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)