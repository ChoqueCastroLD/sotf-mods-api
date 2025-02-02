import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'

import { errorHandler } from './handlers/error.handler'
import { logger } from "./plugins/logger.plugin"

// auth
import { router as authCheckTokenRouter } from "./api/auth/check-token";
import { router as authLoginRouter } from "./api/auth/login";
import { router as authLogoutRouter } from "./api/auth/logout";
import { router as authRegisterRouter } from "./api/auth/register";

// categories
import { router as categoriesRouter } from "./api/categories/categories";

// general
import { router as statsRouter } from "./api/general/stats";

// mods
import { router as modsApproveRouter } from "./api/mods/approve";
import { router as modsCheckRouter } from "./api/mods/check";
import { router as modsDownloadRouter } from "./api/mods/download";
import { router as modsDownloadBySlugRouter } from "./api/mods/download_by_slug";
import { router as modsFeaturedRouter } from "./api/mods/featured";
import { router as modsGetRouter } from "./api/mods/get";
import { router as modsGetBySlugRouter } from "./api/mods/get_by_slug";
import { router as modsListRouter } from "./api/mods/list";
import { router as modsModIdRouter } from "./api/mods/mod-id";
import { router as modsPublishRouter } from "./api/mods/publish";
import { router as modsReleaseVersionRouter } from "./api/mods/release-version";
import { router as modsToggleFavoriteRouter } from "./api/mods/toggle-favorite";
import { router as modsUnapproveRouter } from "./api/mods/unapprove";
import { router as modsUpdateRouter } from "./api/mods/update";
import { router as modsUploadRouter } from "./api/mods/upload";
import { router as modsCronRouter } from "./api/mods/cron";
import { router as modsPublishBuildRouter } from "./api/mods/publish_build";
import { router as modsUploadBuildRouter } from "./api/mods/upload_build";

// users
import { router as usersGetRouter } from "./api/users/get";


new Elysia()
    .use(cors({
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: '*',
        credentials: true
    }))
    .use(logger({ logIP: true }))
	.use(errorHandler())
    // auth
    .group('', (app) => app.use(authCheckTokenRouter()))
    .group('', (app) => app.use(authLoginRouter()))
    .group('', (app) => app.use(authLogoutRouter()))
    .group('', (app) => app.use(authRegisterRouter()))
    // categories
    .group('', (app) => app.use(categoriesRouter()))
    // general
    .group('', (app) => app.use(statsRouter()))
    // mods
    .group('', (app) => app.use(modsApproveRouter()))
    .group('', (app) => app.use(modsCheckRouter()))
    .group('', (app) => app.use(modsDownloadRouter()))
    .group('', (app) => app.use(modsDownloadBySlugRouter()))
    .group('', (app) => app.use(modsFeaturedRouter()))
    .group('', (app) => app.use(modsGetRouter()))
    .group('', (app) => app.use(modsGetBySlugRouter()))
    .group('', (app) => app.use(modsListRouter()))
    .group('', (app) => app.use(modsModIdRouter()))
    .group('', (app) => app.use(modsPublishRouter()))
    .group('', (app) => app.use(modsReleaseVersionRouter()))
    .group('', (app) => app.use(modsToggleFavoriteRouter()))
    .group('', (app) => app.use(modsUnapproveRouter()))
    .group('', (app) => app.use(modsUpdateRouter()))
    .group('', (app) => app.use(modsUploadRouter()))
    .group('', (app) => app.use(modsCronRouter()))
    .group('', (app) => app.use(modsPublishBuildRouter()))
    .group('', (app) => app.use(modsUploadBuildRouter()))
    // users
    .group('', (app) => app.use(usersGetRouter()))
    .listen(Bun.env.PORT ?? 3000, (server) => {
        console.log(`🦊 Elysia is running at ${server?.hostname}:${server?.port}`);
    });
