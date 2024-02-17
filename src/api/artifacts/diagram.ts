import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';


export const router = new Elysia()
    .get(
        '/api/artifacts/:artifact_id/diagram',
        async ({ params: { artifact_id } }) => {
            const artifact = await prisma.artifact.findFirst({
                where: {
                    artifactId: artifact_id,
                },
            })
            if (!artifact) {
                throw new NotFoundError();
            }
            return artifact?.diagram
        },
    )
