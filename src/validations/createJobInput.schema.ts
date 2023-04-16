import { z } from "zod";

export const createJobInputSchema = z.object({
  title: z
    .string({
      required_error: "Blog title is required!",
    })
    .min(3, "Blog title must contain at least 3 character(s)")
    .max(20, "Blog title must contain at most 20 character(s)"),
  jobposition: z
    .string({
      required_error: "Blog jobposition is required!",
    })
    .min(3, "Blog title must contain at least 3 character(s)")
    .max(20, "Blog title must contain at most 20 character(s)"),
  companyname: z
    .string({
      required_error: "Blog companyname is required!",
    })
    .min(3, "Blog title must contain at least 3 character(s)")
    .max(20, "Blog title must contain at most 20 character(s)"),
  type: z
    .string({
      required_error: "Blog type is required!",
    })
    .min(3, "Blog title must contain at least 3 character(s)")
    .max(20, "Blog title must contain at most 20 character(s)"),
  salary: z
    .string({
      required_error: "Blog salary is required!",
    })
    .min(3, "Blog title must contain at least 3 character(s)")
    .max(20, "Blog title must contain at most 20 character(s)"),
  hoursofwork: z
    .string({
      required_error: "Blog hoursofwork is required!",
    })
    .min(3, "Blog title must contain at least 3 character(s)")
    .max(20, "Blog title must contain at most 20 character(s)"),
  location: z
    .string({
      required_error: "Blog location is required!",
    })
    .min(3, "Blog title must contain at least 3 character(s)")
    .max(20, "Blog title must contain at most 20 character(s)"),
  lastdate: z
    .string({
      required_error: "Blog lastdate is required!",
    })
    .min(3, "Blog title must contain at least 3 character(s)")
    .max(20, "Blog title must contain at most 20 character(s)"),
});
