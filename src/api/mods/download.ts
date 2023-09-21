// import { Elysia, NotFoundError, t } from 'elysia'
// import semver from 'semver';

// import { prisma } from '../../services/prisma';


// export const router = new Elysia()
//     .get(
//         '/api/mods/:user_slug/:mod_slug/download/:version',
//         async ({ params: { user_slug, mod_slug, version } }) => {
//             const modVersion = await prisma.modVersion.findFirst({
//               where: {
//                 version,
//                 mod: {
//                   slug: mod_slug,
//                   user: {
//                     slug: user_slug,
//                   }
//                 },
//               },
//             });
//             if (!modVersion) {
//               throw new NotFoundError();
//             }
//             console.log({modVersion})
//             const f = await fetch(modVersion.downloadUrl);
//             const blob = await f.blob();
//             return blob;
//         }
//     )