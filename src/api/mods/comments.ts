import { Elysia, t } from "elysia";

import { prisma } from "../../services/prisma";

export const router = () =>
  new Elysia().get(
    "/api/comments",
    async ({ query: { mod_id } }) => {
      const comments = await prisma.comment.findMany({
        where: {
          modId: mod_id,
        },
        select: {
          message: true,
          createdAt: true,
          isHidden: true,
          user: {
            select: {
              name: true,
              slug: true,
              imageUrl: true,
            },
          },
          replies: {
            select: {
              id: true,
              message: true,
              createdAt: true,
              isHidden: true,
              user: {
                select: {
                  name: true,
                  slug: true,
                  imageUrl: true,
                },
              },
              _count: {
                select: {
                  replies: true,
                },
              },
            },
            take: 1,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return { status: true, data: comments };
    },
    {
      query: t.Object({
        mod_id: t.Number(),
        comment_id: t.Optional(t.Number()),
      }),
      transform: ({ query }) => {
        query.mod_id = Number(query.mod_id.toString());
        query.comment_id = query.comment_id ? Number(query.comment_id.toString()) : undefined;
      },
    }
  );
