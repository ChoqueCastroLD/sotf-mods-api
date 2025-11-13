import { Elysia } from "elysia";

import { prisma } from "../services/prisma";
import { UnauthorizedError } from "../errors/auth";

export const authMiddleware = (opts: { loggedOnly: boolean }) =>
  new Elysia().derive({ as: "global" }, async ({ request: { headers } }) => {
    // API only accepts tokens via Authorization header, not cookies
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
  new Elysia().derive({ as: "global" }, async ({ request }) => {
    // API only accepts tokens via Authorization header, not cookies
    const headers = request.headers;
    const authHeader = headers.get("Authorization");
    console.log(`[API Auth] Authorization header: ${authHeader ? 'present' : 'missing'}`, authHeader ? `${authHeader.substring(0, 30)}...` : '');
    
    let token = authHeader?.split("Bearer ")[1];
    // Trim token to remove any whitespace
    if (token) {
      token = token.trim();
    }
    console.log(`[API Auth] Extracted token: ${token ? 'found' : 'not found'}`, token ? `length: ${token.length}, first 20 chars: ${token.substring(0, 20)}...` : '');

    if (!token) {
      console.log(`[API Auth] No token found, throwing UnauthorizedError`);
      throw new UnauthorizedError("Unauthorized, login required");
    }
    
    console.log(`[API Auth] Looking up user with token in database...`);
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
    
    console.log(`[API Auth] User lookup result: ${user ? 'found' : 'not found'}`, user ? `user: ${user.name} (${user.slug})` : '');
    
    if (token && user) {
      console.log(`[API Auth] Authentication successful for user: ${user.name}`);
      return { token, user };
    } else {
      console.log(`[API Auth] Authentication failed - token exists but user not found in database`);
      throw new UnauthorizedError("Unauthorized, login required");
    }
  });
