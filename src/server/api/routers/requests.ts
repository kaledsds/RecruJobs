import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const jobRequestsRouter = createTRPCRouter({
  checkRequest: protectedProcedure
    .input(
      z.object({
        id: z.string({ required_error: "request id is required" }).cuid(),
      })
    )
    .query(async ({ ctx, input }) => {
      const job = await ctx.prisma.jobRequest.findFirst({
        where: {
          AND: [{ jobId: input.id }, { userId: ctx.session.user.id }],
        },
      });
      if (!job) {
        return true;
      }
      return false;
    }),
  getRequestsByJob: protectedProcedure.query(async ({ ctx }) => {
    const { id } = { id: ctx.session.user.id };
    const job = await ctx.prisma.job.findFirst({
      where: {
        userId: id,
      },
      include: {
        requests: {
          include: {
            user: {
              include: {
                resume: true,
              },
            },
            job: true,
          },
        },
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
      include: {
        job: {
          include: {
            user: true,
          },
        },
      },
    });
    return { requests };
  }),
  editJobRequest: publicProcedure
    .input(
      z.object({
        id: z.string({ required_error: "job request id is required" }),
        status: z.enum(["pending", "accepted", "declined"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, status } = input;
      const jobRequest = await ctx.prisma.jobRequest.update({
        where: {
          id: id,
        },
        data: {
          status: status,
        },
      });
      return { jobRequest };
    }),
  createJobRequest: protectedProcedure
    .input(
      z.object({
        id: z.string({ required_error: "job request id is required" }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const jobRequest = await ctx.prisma.jobRequest.create({
        data: {
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          job: {
            connect: {
              id,
            },
          },
        },
      });
      if (!jobRequest) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }
      return { jobRequest };
    }),

  deletJobRequest: protectedProcedure
    .input(
      z.object({
        id: z.string({ required_error: "request id is required" }).cuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const jobRequest = await ctx.prisma.jobRequest.findFirst({
        where: {
          id,
        },
        include: {
          job: true,
        },
      });
      if (!jobRequest) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }
      if (jobRequest.userId !== ctx.session.user.id) {
        throw new TRPCError({ code: "FORBIDDEN" });
      }
      return await ctx.prisma.jobRequest.delete({
        where: {
          id,
        },
      });
    }),
});
