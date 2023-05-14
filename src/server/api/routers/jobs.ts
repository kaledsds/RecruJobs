import { TRPCError } from "@trpc/server";
import { createJobInputSchema } from "~/validations/createJobInput.schema";
import { JobIdInputSchema } from "~/validations/JobIdInput.schema";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const jobsRouter = createTRPCRouter({
  getJobs: publicProcedure.query(async ({ ctx }) => {
    const jobs = await ctx.prisma.job.findMany({
      include: {
        user: true,
      },
    });
    return { jobs };
  }),
  getJobById: publicProcedure
    .input(JobIdInputSchema)
    .query(async ({ ctx, input }) => {
      const job = await ctx.prisma.job.findFirst({
        include: {
          user: true,
        },
        where: {
          id: input.id,
        },
      });
      return { job };
    }),
  getUserJobs: protectedProcedure.query(async ({ ctx }) => {
    const jobs = await ctx.prisma.job.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
    return { jobs };
  }),
  createJob: protectedProcedure
    .input(createJobInputSchema)
    .mutation(async ({ ctx, input }) => {
      const {
        title,
        jobposition,
        companyname,
        type,
        salary,
        hoursofwork,
        location,
        lastdate,
      } = input;
      const { id } = ctx.session.user;
      const job = await ctx.prisma.job.create({
        data: {
          title,
          jobposition,
          companyname,
          type,
          salary,
          hoursofwork,
          location,
          lastdate,
          user: {
            connect: {
              id,
            },
          },
        },
      });
      return { job };
    }),
  deleteJob: protectedProcedure
    .input(JobIdInputSchema)
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const job = await ctx.prisma.job.findFirst({
        where: {
          id,
        },
      });
      if (!job) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      if (job.userId !== ctx.session.user.id) {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      return await ctx.prisma.job.delete({
        where: {
          id,
        },
      });
    }),
});
