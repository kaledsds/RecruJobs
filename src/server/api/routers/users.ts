import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const usersRouter = createTRPCRouter({
  getUserById: publicProcedure
    .input(
      z.object({
        id: z.string({
          required_error: "User id is required",
        }),
      })
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;
      const user = await ctx.prisma.user.findFirst({
        include: {
          jobs: true,
        },
        where: {
          id: id,
        },
      });
      return {
        user,
      };
    }),
});
