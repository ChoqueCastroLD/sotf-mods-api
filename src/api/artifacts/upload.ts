import { Elysia, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { authMiddleware } from '../../middlewares/auth.middleware'
import { UnauthorizedError } from '../../errors/auth';
import { ValidationError } from '../../errors/validation';


export const router = new Elysia()
    .use(authMiddleware({ loggedOnly: true }))
    .post(
        '/api/artifacts/upload',
        async ({ body: { artifact_id, code, diagram }, user }) => {
            if (!user) {
                throw new UnauthorizedError('You need to be logged in to upload artifacts');
            }
            const artifact = await prisma.artifact.findFirst({
                where: {
                    artifactId: artifact_id,
                },
            })
            if (artifact && artifact.userId !== user?.id) {
                throw new UnauthorizedError('You can only update your own artifacts');
            }
            try {
                JSON.stringify(JSON.parse(code));
            } catch (error) {
                throw new ValidationError([{ field: 'code', message: 'Invalid JSON in code' }]);
            }
            try {
                JSON.stringify(JSON.parse(diagram));
            } catch (error) {
                throw new ValidationError([{ field: 'diagram', message: 'Invalid JSON in diagram' }]);
            }
            if (artifact) {
                await prisma.artifact.update({
                    where: {
                        id: artifact.id,
                    },
                    data: {
                        code,
                        diagram,
                    },
                });
            } else {
                await prisma.artifact.create({
                    data: {
                        artifactId: artifact_id,
                        code,
                        diagram,
                        userId: user.id,
                    },
                });
            }
            return true;
        },
        {
            body: t.Object({
                artifact_id: t.String(),
                code: t.String(),
                diagram: t.String(),
            }),
        }
    )
