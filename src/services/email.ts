import { Resend } from "resend";

const resend = new Resend(Bun.env.RESEND_API_KEY);
const EMAIL_FROM = Bun.env.EMAIL_FROM ?? "noreply@sotf-mods.com";

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
    const { error } = await resend.emails.send({
        from: EMAIL_FROM,
        to,
        subject: "Reset your password - SOTF-Mods",
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #1d232a; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1d232a; padding: 40px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #2a323c; border-radius: 8px; padding: 40px;">
                    <tr>
                        <td align="center" style="padding-bottom: 24px;">
                            <h1 style="color: #a6adbb; margin: 0; font-size: 24px;">SOTF-Mods</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #a6adbb; font-size: 16px; line-height: 1.6; padding-bottom: 16px;">
                            <p style="margin: 0 0 16px 0;">You requested a password reset for your account.</p>
                            <p style="margin: 0 0 24px 0;">Click the button below to set a new password. This link will expire in 1 hour.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-bottom: 24px;">
                            <a href="${resetUrl}" style="display: inline-block; background-color: #661ae6; color: #ffffff; text-decoration: none; padding: 12px 32px; border-radius: 6px; font-size: 16px; font-weight: bold;">Reset Password</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #6b7280; font-size: 14px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;">If you didn't request this, you can safely ignore this email.</p>
                            <p style="margin: 0; word-break: break-all;">Or copy this link: ${resetUrl}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `.trim(),
    });

    if (error) {
        console.error("Failed to send password reset email:", error);
        throw new Error("Failed to send email");
    }
}

export interface MentionItem {
    type: string; // "mention" | "comment" | "reply"
    fromUserName: string;
    modName: string;
    modUrl: string;
    message: string;
}

export async function sendBatchedMentionsEmail(to: string, userName: string, mentions: MentionItem[]) {
    const safeUserName = escapeHtml(userName);

    const typeLabel = (type: string) => {
        switch (type) {
            case "comment": return "commented on your mod";
            case "reply": return "replied to your comment on";
            case "mention": return "mentioned you in a comment on";
            default: return "interacted on";
        }
    };

    const mentionRows = mentions.map(m => {
        const safeFrom = escapeHtml(m.fromUserName);
        const safeMod = escapeHtml(m.modName);
        const safeMessage = escapeHtml(m.message);
        return `
                    <tr>
                        <td style="padding-bottom: 20px;">
                            <p style="margin: 0 0 8px 0; color: #a6adbb; font-size: 14px;">
                                <strong>${safeFrom}</strong> ${typeLabel(m.type)} <strong><a href="${m.modUrl}" style="color: #661ae6; text-decoration: none;">${safeMod}</a></strong>:
                            </p>
                            <div style="background-color: #1d232a; border-left: 4px solid #661ae6; padding: 12px 16px; border-radius: 0 4px 4px 0;">
                                <p style="margin: 0; color: #a6adbb; font-size: 13px;">${safeMessage}</p>
                            </div>
                        </td>
                    </tr>`;
    }).join("");

    const subject = mentions.length === 1
        ? `New notification on SOTF-Mods`
        : `${mentions.length} new notifications on SOTF-Mods`;

    const { error } = await resend.emails.send({
        from: EMAIL_FROM,
        to,
        subject,
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #1d232a; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1d232a; padding: 40px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #2a323c; border-radius: 8px; padding: 40px;">
                    <tr>
                        <td align="center" style="padding-bottom: 24px;">
                            <h1 style="color: #a6adbb; margin: 0; font-size: 24px;">SOTF-Mods</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #a6adbb; font-size: 16px; line-height: 1.6; padding-bottom: 16px;">
                            <p style="margin: 0 0 16px 0;">Hi <strong>${safeUserName}</strong>, you have new notifications:</p>
                        </td>
                    </tr>
                    ${mentionRows}
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `.trim(),
    });

    if (error) {
        console.error("Failed to send batched mentions email:", error);
    }
}
