import { z } from "zod";

export const deleteJobInputSchema = z.object({
  id: z
    .string({
      required_error: "Job id is required!",
    })
    .cuid(),
});
