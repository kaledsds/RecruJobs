import { createTRPCRouter } from "~/server/api/trpc";
import { jobRequestsRouter } from "./routers/requests";
import { jobsRouter } from "./routers/jobs";
import { usersRouter } from "./routers/users";
import { resumeRouter } from "./routers/resume";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  jobRequests: jobRequestsRouter,
  users: usersRouter,
  jobs: jobsRouter,
  resume: resumeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
