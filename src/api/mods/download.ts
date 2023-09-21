import { Elysia, NotFoundError } from 'elysia'

import { prisma } from '../../services/prisma';


export const router = new Elysia()
    .get(
        '/api/mods/:user_slug/:mod_slug/download/:version',
        async ({ params: { user_slug, mod_slug, version }, set }) => {
            const mod = await prisma.mod.findFirst({
                where: {
                    slug: mod_slug,
                    user: {
                        slug: user_slug
                    },
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

            set.headers['Content-Type'] = "" + f.headers.get('Content-Type');
            set.headers['Content-Length'] = "" + f.headers.get('Content-Length');
            set.headers['Content-Disposition'] = `attachment; filename="${mod.name} ${modVersion.version}.${modVersion.extension}"`;

            return blob;
        }
    )