import { Elysia } from "elysia";

import { prisma } from "../services/prisma";
import { UnauthorizedError } from "../errors/auth";

export const authMiddleware = (opts: { loggedOnly: boolean }) =>
  new Elysia().derive({ as: "global" }, async ({ request: { headers } }) => {
    const token = headers.get("Authorization")?.split("Bearer ")[1];
    if (!token) return { token: null, user: null };
    const user = await prisma.user.findFirst({
      include: {
        favoriteMods: {
          select: {
            mod: {
              select: {
                mod_id: true,
              },
            },
          },
        },
      },
      where: {
        tokens: {
          some: {
            token,
          },
        },
      },
    });
    if (token && user) return { token, user };
    else if (opts.loggedOnly)
      throw new UnauthorizedError("Unauthorized, login required");
    else return { token: null, user: null };
  });

export const loggedOnly = () =>
  new Elysia().derive({ as: "global" }, async ({ request: { headers } }) => {
    const token = headers.get("Authorization")?.split("Bearer ")[1];
    if (!token) throw new UnauthorizedError("Unauthorized, login required");
    const user = await prisma.user.findFirst({
      include: {
        favoriteMods: {
          select: {
            mod: {
              select: {
                mod_id: true,
              },
            },
          },
        },
      },
      where: {
        tokens: {
          some: {
            token,
          },
        },
      },
    });
    if (token && user) return { token, user };
    else throw new UnauthorizedError("Unauthorized, login required");
  });
