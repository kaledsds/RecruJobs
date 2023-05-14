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
      required_error: "Job position is required!",
    })
    .min(3, "Job position must contain at least 3 character(s)")
    .max(20, "Job position must contain at most 20 character(s)"),
  companyname: z
    .string({
      required_error: "company name is required!",
    })
    .min(3, "company name must contain at least 3 character(s)")
    .max(20, "company name must contain at most 20 character(s)"),
  type: z
    .string({
      required_error: "Job type is required!",
    })
    .min(3, "type must contain at least 3 character(s)")
    .max(20, "type must contain at most 20 character(s)"),
  salary: z
    .string({
      required_error: "Job salary is required!",
    })
    .min(3, "Salary must contain at least 3 character(s)")
    .max(20, "Salary must contain at most 20 character(s)"),
  hoursofwork: z
    .string({
      required_error: "hours of work is required!",
    })
    .min(3, "hours of work must contain at least 3 character(s)")
    .max(20, "hours of work must contain at most 20 character(s)"),
  location: z
    .string({
      required_error: "Job location is required!",
    })
    .min(3, "Job location must contain at least 3 character(s)")
    .max(20, "Job location must contain at most 20 character(s)"),
  lastdate: z
    .string({
      required_error: "job lastdate is required!",
    })
    .min(3, "Job lastdate must contain at least 3 character(s)")
    .max(20, "Job lastdate must contain at most 20 character(s)"),
});
