import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const resumeRouter = createTRPCRouter({
  getResume: protectedProcedure.query(async ({ ctx }) => {
    const resume = await ctx.prisma.resume.findFirst({
      where: {
        owner: { id: ctx.session.user.id },
      },
    });
    if (!resume) {
      return null;
    }
    return resume;
  }),
  createResume: protectedProcedure
    .input(z.object({ url: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const resume = await ctx.prisma.resume.create({
        data: {
          url: input.url,
          owner: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
      return resume;
    }),
  deleteResume: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const resume = await ctx.prisma.resume.findFirst({
        where: {
          id,
        },
      });
      if (!resume) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      if (resume.userId !== ctx.session.user.id) {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      return await ctx.prisma.resume.delete({
        where: {
          id,
        },
      });
    }),
});
