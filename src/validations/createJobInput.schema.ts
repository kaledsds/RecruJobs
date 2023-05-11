import { z } from "zod";

export const createJobInputSchema = z.object({
  title: z
    .string({
      required_error: "Job title is required!",
    })
    .min(3, "Job title must contain at least 3 character(s)")
    .max(20, "Job title must contain at most 20 character(s)"),
  jobposition: z
    .string({
      required_error: "Job jobposition is required!",
    })
    .min(3, "Job title must contain at least 3 character(s)")
    .max(20, "Job title must contain at most 20 character(s)"),
  companyname: z
    .string({
      required_error: "Job companyname is required!",
    })
    .min(3, "Job title must contain at least 3 character(s)")
    .max(20, "Job title must contain at most 20 character(s)"),
  type: z
    .string({
      required_error: "Job type is required!",
    })
    .min(3, "Job title must contain at least 3 character(s)")
    .max(20, "Job title must contain at most 20 character(s)"),
  salary: z
    .string({
      required_error: "Job salary is required!",
    })
    .min(3, "Job title must contain at least 3 character(s)")
    .max(20, "Job title must contain at most 20 character(s)"),
  hoursofwork: z
    .string({
      required_error: "Job hoursofwork is required!",
    })
    .min(3, "Job title must contain at least 3 character(s)")
    .max(20, "Job title must contain at most 20 character(s)"),
  location: z
    .string({
      required_error: "Job location is required!",
    })
    .min(3, "Job title must contain at least 3 character(s)")
    .max(20, "Job title must contain at most 20 character(s)"),
  lastdate: z
    .string({
      required_error: "job lastdate is required!",
    })
    .min(3, "Job title must contain at least 3 character(s)")
    .max(20, "Job title must contain at most 20 character(s)"),
});
