import { Elysia, t } from 'elysia'

import { ValidationError } from '../../errors/validation';
import { prisma } from "../../services/prisma";
import { generateToken } from '../../shared/token';


export const router = new Elysia()
    .post(
        '/api/auth/login',
        async ({ body: { email, password } }) => {
            const user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user) {
                throw new ValidationError("Validation error", [{ field: 'email', message: "User with this email does not exist" }]);
            }

            const passwordMatch = await Bun.password.verify(password, user.password);

            if (!passwordMatch) {
                throw new ValidationError("Validation error", [{ field: 'password', message: "Password is incorrect" }]);
            }

            const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 2); // 2 days
            const token = await generateToken(user.id);

            // delete existing expired tokens
            await prisma.token.deleteMany({
                where: {
                    expiresAt: {
                        lt: new Date(),
                    }
                }
            });

            await prisma.token.create({
                data: {
                    token,
                    expiresAt,
                    userId: user.id,
                }
            });

            return { token, slug: user.slug, name: user.name, image_url: user.image_url };
        }, {
            body: t.Object({
                email: t.String(),
                password: t.String(),
            }),
            response: t.Object({
                token: t.String(),
                slug: t.String(),
                name: t.String(),
                image_url: t.String(),
            })
        }
    )