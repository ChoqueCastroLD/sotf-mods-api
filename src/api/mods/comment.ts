import { Elysia, NotFoundError, t } from 'elysia'

import { prisma } from '../../services/prisma';
import { loggedOnly } from '../../middlewares/auth.middleware'
import { ValidationError } from '../../errors/validation';
import { sanitizeInput } from '../../shared/sanitize';
import { uploadFile } from '../../services/files';


export const router = () => new Elysia()
    .use(loggedOnly())
    .post(
        '/api/comments',
        async ({ request, body: { mod_id, message, reply_id, image }, query: { ip }, user }) => {
            const modId = Number(mod_id);
            const replyId = reply_id ? Number(reply_id) : undefined;

            const mod = await prisma.mod.findFirst({
              where: {
                id: modId
              },
              include: {
                user: {
                  select: { id: true, email: true, name: true, slug: true }
                }
              }
            });
            if (!mod) {
              throw new NotFoundError();
            }
            const sanitizedMessage = sanitizeInput(message);
            if (!sanitizedMessage) {
                throw new ValidationError([{ field: 'message', message: "Message cant be empty" }]);
            }
            if (sanitizedMessage.length > 500) {
                throw new ValidationError([{ field: 'message', message: "Message cant be longer than 500 characters" }]);
            }
            if (sanitizedMessage.length < 2) {
                throw new ValidationError([{ field: 'message', message: "Message cant be shorter than 2 characters" }]);
            }

            // Validate reply if provided
            let parentComment = null;
            if (replyId) {
                parentComment = await prisma.comment.findFirst({
                    where: { id: replyId, modId: mod.id },
                    include: { user: { select: { id: true, name: true } } }
                });
                if (!parentComment) {
                    throw new ValidationError([{ field: 'reply_id', message: "Parent comment not found" }]);
                }
                // Enforce 1 level deep: parent must not be a reply itself
                if (parentComment.replyId !== null) {
                    throw new ValidationError([{ field: 'reply_id', message: "Cannot reply to a reply" }]);
                }
            }

            const comment = await prisma.comment.create({
              data: {
                ip: (ip + "") || ("" + request.headers.get("x-forwarded-for")),
                message: sanitizedMessage,
                modId: mod.id,
                userId: user?.id ?? undefined,
                isHidden: false,
                replyId: replyId ?? undefined,
              },
            });

            // Upload image if provided
            let imageUrl: string | null = null;
            if (image) {
                try {
                    const ext = image.name.split(".").pop();
                    const imageBuffer = await image.arrayBuffer();
                    const imageKey = await uploadFile(imageBuffer, `comment_${comment.id}.${ext}`);
                    imageUrl = `${Bun.env.FILE_DOWNLOAD_ENDPOINT}/${imageKey}`;
                    await prisma.comment.update({
                        where: { id: comment.id },
                        data: { imageUrl },
                    });
                } catch (error) {
                    console.error("Error uploading comment image:", error);
                }
            }

            await prisma.mod.update({
              where: {
                id: mod.id
              },
              data: {
                commentsCount: { increment: 1 }
              }
            });

            // Build PendingMention records instead of sending emails directly
            const mentionsToCreate: { targetUserId: number; fromUserId: number; modId: number; commentMessage: string; type: string }[] = [];
            const notifiedUserIds = new Set<number>();
            const commenterId = user?.id;
            const commenterName = user?.name ?? "Someone";

            // Helper to avoid duplicate notifications
            const addMention = (targetUserId: number, type: string) => {
                if (targetUserId === commenterId) return; // Don't notify yourself
                if (notifiedUserIds.has(targetUserId)) return; // Already notified
                notifiedUserIds.add(targetUserId);
                mentionsToCreate.push({
                    targetUserId,
                    fromUserId: commenterId!,
                    modId: mod.id,
                    commentMessage: sanitizedMessage,
                    type,
                });
            };

            // 1. Notify mod creator (type "comment") if commenter != creator
            if (mod.user && mod.userId) {
                addMention(mod.userId, "comment");
            }

            // 2. Notify parent comment author (type "reply") if this is a reply
            if (parentComment && parentComment.userId) {
                addMention(parentComment.userId, "reply");
            }

            // 3. Extract @mentions from message
            const mentionMatches = sanitizedMessage.match(/@(\w+)/g);
            if (mentionMatches) {
                const uniqueUsernames = [...new Set(mentionMatches.map(m => m.slice(1).toLowerCase()))];
                if (uniqueUsernames.length > 0) {
                    const mentionedUsers = await prisma.user.findMany({
                        where: {
                            name: { in: uniqueUsernames, mode: 'insensitive' }
                        },
                        select: { id: true, name: true }
                    });
                    for (const mentionedUser of mentionedUsers) {
                        addMention(mentionedUser.id, "mention");
                    }
                }
            }

            // Create all pending mentions in bulk
            if (mentionsToCreate.length > 0 && commenterId) {
                await prisma.pendingMention.createMany({
                    data: mentionsToCreate,
                });
            }

            return {
                status: true,
                data: { ...comment, imageUrl: imageUrl ?? comment.imageUrl },
            };
        }, {
            body: t.Object({
                mod_id: t.Union([t.Number(), t.String()]),
                message: t.String(),
                reply_id: t.Optional(t.Union([t.Number(), t.String()])),
                image: t.Optional(t.File({
                    type: ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"],
                    maxSize: 8 * 1024 * 1024,
                })),
            }),
            response: t.Object({
                status: t.Boolean(),
                data: t.Any()
            }),
        }
    )
