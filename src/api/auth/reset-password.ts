import { Elysia, t } from "elysia";

import { ValidationError } from "../../errors/validation";
import { prisma } from "../../services/prisma";
import { validatePassword } from "../../shared/validation";

export const router = () =>
    new Elysia().post(
        "/api/auth/reset-password",
        async ({ body: { token, password, confirm_password } }) => {
            const resetToken = await prisma.passwordResetToken.findUnique({
                where: { token },
                include: { user: true },
            });

            if (!resetToken) {
                throw new ValidationError([
                    { field: "token", message: "Invalid or expired reset link" },
                ]);
            }

            if (resetToken.expiresAt < new Date()) {
                // Clean up expired token
                await prisma.passwordResetToken.delete({
                    where: { id: resetToken.id },
                });
                throw new ValidationError([
                    { field: "token", message: "Reset link has expired. Please request a new one." },
                ]);
            }

            const errors = validatePassword(password, confirm_password);
            if (errors.length > 0) {
                throw new ValidationError(errors);
            }

            const hashedPassword = await Bun.password.hash(password);

            // Update password and clean up in a transaction
            await prisma.$transaction([
                // Update the user's password
                prisma.user.update({
                    where: { id: resetToken.userId },
                    data: { password: hashedPassword },
                }),
                // Delete all reset tokens for this user
                prisma.passwordResetToken.deleteMany({
                    where: { userId: resetToken.userId },
                }),
                // Invalidate all existing login tokens (force re-login)
                prisma.token.deleteMany({
                    where: { userId: resetToken.userId },
                }),
            ]);

            return { status: true };
        },
        {
            body: t.Object({
                token: t.String(),
                password: t.String(),
                confirm_password: t.String(),
            }),
        }
    );
