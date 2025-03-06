import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { loggedOnly } from '../../middlewares/auth.middleware'
import { ValidationError } from '../../errors/validation';
import { sanitizeInput } from '../../shared/sanitize';


export const router = () => new Elysia()
    .use(loggedOnly())
    .post(
        '/api/comments',
        async ({ request, body: { mod_id, message }, query: { ip }, user }) => {
            const mod = await prisma.mod.findFirst({
              where: {
                id: mod_id
              }
            });
            if (!mod) {
              throw new NotFoundError();
            }
            const sanitizedMessage = sanitizeInput(message);
            if (!sanitizedMessage) {
                throw new ValidationError([{ field: 'message', message: "Message cant be empty" }]);
            }
            if (sanitizedMessage.length > 500) {
                throw new ValidationError([{ field: 'message', message: "Message cant be longer than 500 characters" }]);
            }
            if (sanitizedMessage.length < 2) {
                throw new ValidationError([{ field: 'message', message: "Message cant be shorter than 2 characters" }]);
            }
            const comment = await prisma.comment.create({
              data: {
                ip: (ip + "") || ("" + request.headers.get("x-forwarded-for")),
                message: sanitizedMessage,
                modId: mod.id,
                userId: user?.id ?? undefined,
                isHidden: false,
              },
            });
            await prisma.mod.update({
              where: {
                id: mod.id
              },
              data: {
                commentsCount: { increment: 1 }
              }
            });
            return { 
                status: true,
                data: comment,
            };
        }, {
            body: t.Object({
                mod_id: t.Number(),
                message: t.String()
            }),
            response: t.Object({
                status: t.Boolean(),
                data: t.Any()
            }),
        }
    )