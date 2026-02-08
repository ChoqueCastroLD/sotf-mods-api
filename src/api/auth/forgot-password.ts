import { Elysia, t } from "elysia";
import crypto from "crypto";

import { prisma } from "../../services/prisma";
import { sendPasswordResetEmail } from "../../services/email";

const BASE_URL = Bun.env.BASE_URL ?? "https://sotf-mods.com";

export const router = () =>
    new Elysia().post(
        "/api/auth/forgot-password",
        async ({ body: { email } }) => {
            const user = await prisma.user.findFirst({
                where: {
                    email: {
                        equals: email,
                        mode: "insensitive",
                    },
                },
            });

            // Always return success to prevent email enumeration
            if (!user) {
                return {
                    status: true,
                    message: "If an account with that email exists, a reset link has been sent.",
                };
            }

            // Delete any existing reset tokens for this user
            await prisma.passwordResetToken.deleteMany({
                where: { userId: user.id },
            });

            const token = crypto.randomBytes(32).toString("hex");
            const expiresAt = new Date(Date.now() + 1000 * 60 * 60); // 1 hour

            await prisma.passwordResetToken.create({
                data: {
                    token,
                    expiresAt,
                    userId: user.id,
                },
            });

            const resetUrl = `${BASE_URL}/reset-password?token=${token}`;

            try {
                await sendPasswordResetEmail(user.email, resetUrl);
            } catch (error) {
                console.error("Failed to send password reset email:", error);
            }

            return {
                status: true,
                message: "If an account with that email exists, a reset link has been sent.",
            };
        },
        {
            body: t.Object({
                email: t.String(),
            }),
        }
    );
