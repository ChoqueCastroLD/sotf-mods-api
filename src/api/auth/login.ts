import { Elysia, t } from "elysia";

import { ValidationError } from "../../errors/validation";
import { prisma } from "../../services/prisma";
import { generateToken } from "../../shared/token";

export const router = () =>
  new Elysia().post(
    "/api/auth/login",
    async ({ body: { email, password } }) => {
      const user = await prisma.user.findFirst({
        where: {
          email: {
            equals: email,
            mode: "insensitive",
          },
        },
      });

      if (!user) {
        throw new ValidationError([
          { field: "email", message: "User with this email does not exist" },
        ]);
      }

      const passwordMatch = await Bun.password.verify(password, user.password);

      if (!passwordMatch) {
        throw new ValidationError([
          { field: "password", message: "Password is incorrect" },
        ]);
      }

      const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 2); // 2 days
      const token = await generateToken(user.id);

      // delete existing expired tokens
      await prisma.token.deleteMany({
        where: {
          expiresAt: {
            lt: new Date(),
          },
        },
      });

      await prisma.token.create({
        data: {
          token,
          expiresAt,
          userId: user.id,
        },
      });

      // Return token in response - frontend will set it in its own cookie
      // Frontend will read from cookie/localStorage and send in Authorization header to API
      return {
        status: true,
        data: {
          token,
          slug: user.slug,
          name: user.name,
          imageUrl: user.imageUrl,
          canApprove: user.canApprove,
        },
      };
    },
    {
      body: t.Object({
        email: t.String(),
        password: t.String(),
      }),
    }
  );
