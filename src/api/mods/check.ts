import { Elysia, NotFoundError, t } from 'elysia'
import semver from 'semver';

import { prisma } from '../../services/prisma';


export const router = () => new Elysia()
    .get(
        '/api/mods/:mod_id/check',
        async ({ params: { mod_id }, query: { version } }) => {
            const latestVersion = await prisma.modVersion.findFirst({
              where: {
                mod: {
                  mod_id
                },
                isLatest: true,
              },
              select: {
                version: true,
                changelog: true,
              }
            });
            if (!latestVersion) {
              throw new NotFoundError();
            }
            if (version) {
              if (semver.gt(latestVersion.version, version)) {
                return {
                  status: true,
                  newVersionAvailable: true,
                  message: 'New version available',
                  version: latestVersion.version,
                  changelog: latestVersion.changelog,
                };
              } else {
                return {
                  status: true,
                  newVersionAvailable: false,
                  message: 'No new version available',
                  version: latestVersion.version,
                  changelog: latestVersion.changelog,
                };
              }
            }
            return {
              status: true,
              newVersionAvailable: false,
              message: 'Latest version',
              version: latestVersion.version,
              changelog: latestVersion.changelog
            };
        }, {
            query: t.Object({
                version: t.Optional(t.String()),
            }),
            response: t.Object({
                status: t.Boolean(),
                newVersionAvailable: t.Boolean(),
                message: t.String(),
                version: t.String(),
                changelog: t.String(),
            }),
        }
    )