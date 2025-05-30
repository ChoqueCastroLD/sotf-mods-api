import { Elysia, NotFoundError } from 'elysia'

import { prisma } from '../../services/prisma';


export const router = () => new Elysia()
    .get(
        '/api/mods/:mod_id/download/:version',
        async ({ request, params: { mod_id, version }, query: { ip, agent }, set }) => {
            const mod = await prisma.mod.findFirst({
                where: {
                    mod_id,
                    versions: {
                        some: {
                            version,
                        }
                    }
                },
                select: {
                    id: true,
                    name: true,
                    versions: {
                        where: {
                            version,
                        },
                        select: {
                            id: true,
                            version: true,
                            extension: true,
                            downloadUrl: true,
                        }
                    }
                }
            });
            if (!mod) {
              throw new NotFoundError();
            }
            const modVersion = mod?.versions[0];
            if (!modVersion) {
              throw new NotFoundError();
            }
            const f = await fetch(modVersion.downloadUrl);
            const blob = await f.blob();

            await Promise.all([
                prisma.modDownload.create({
                    data: {
                        ip: (ip + "") || ("" + request.headers.get("x-forwarded-for")),
                        userAgent: (agent + "") || ("" + request.headers.get("user-agent")),
                        modVersionId: modVersion.id,
                    }
                }),
                prisma.mod.update({
                    where: {
                        id: mod.id,
                    },
                    data: {
                        downloads: { increment: 1 }
                    }
                })
            ]);

            set.headers['Content-Type'] = "" + f.headers.get('Content-Type');
            set.headers['Content-Length'] = "" + f.headers.get('Content-Length');
            set.headers['Content-Disposition'] = `attachment; filename="${mod.name} ${modVersion.version}.${modVersion.extension}"`;

            return blob;
        }
    )