import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const jobRequestsRouter = createTRPCRouter({
  getRequestsByJob: protectedProcedure
    .input(
      z.object({
        id: z.string({ required_error: "job id is required" }),
      })
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;
      const job = await ctx.prisma.job.findFirst({
        where: {
          id,
        },
        include: {
          requests: true,
        },
      });
      if (!job) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      if (job.userId !== ctx.session.user.id) {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      return { requests: job.requests };
    }),
  getRequestByUser: protectedProcedure.query(async ({ ctx }) => {
    const { id } = ctx.session.user;
    const requests = await ctx.prisma.jobRequest.findMany({
      where: {
        userId: id,
      },
    });
    return { requests };
  }),
  createJobRequest: protectedProcedure
    .input(
      z.object({
        id: z.string({ required_error: "job id is required" }),
        status: z.enum(["pending", "accepted", "declined"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, status } = input;
      const jobRequest = await ctx.prisma.jobRequest.create({
        data: {
          status,
          user: {
            connect: {
              id,
            },
          },
          job: {
            connect: {
              id,
            },
          },
        },
      });
      return { jobRequest };
    }),
  deletJobRequest: protectedProcedure
    .input(
      z.object({
        id: z.string({ required_error: "job id is required" }).cuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const jobRequest = await ctx.prisma.jobRequest.findFirst({
        where: {
          id,
          status: "declined",
        },
        include: {
          job: true,
        },
      });
      if (!jobRequest) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      if (
        jobRequest.userId !== ctx.session.user.id ||
        jobRequest.job.userId !== ctx.session.user.id
      ) {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      return await ctx.prisma.jobRequest.delete({
        where: {
          id,
        },
      });
    }),
});