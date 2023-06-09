import { createTRPCRouter, publicProcedure } from "../trpc";

export const crewsRouter = createTRPCRouter({
  getCrewMembers: publicProcedure.query(async ({ ctx }) => {
    const crewMembers = await ctx.prisma.crewMember.findMany({
      include: {
        employee: {
          include: {
            resume: true,
          },
        },
      },
    });
    return { crewMembers };
  }),
});
