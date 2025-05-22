import * as z from "zod";

export const assignmentFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required.",
      invalid_type_error: "Name must be a string.",
    })
    .min(1, { message: "Name is required." }),

  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .min(1, { message: "Email is required." })
    .email({ message: "Email must be a valid email address." }),

  description: z
    .string({
      required_error: "Assignment description is required.",
      invalid_type_error: "Assignment description must be a string.",
    })
    .min(10, { message: "Assignment description must be at least 10 characters." }),

  githubUrl: z
    .string({
      required_error: "GitHub repository URL is required.",
      invalid_type_error: "GitHub repository URL must be a string.",
    })
    .min(1, { message: "GitHub repository URL is required." })
    .url({ message: "GitHub repository URL must be a valid URL." }),

  level: z.enum(["Junior", "Middle", "Senior", "Principal"], {
    required_error: "Candidate level is required.",
    invalid_type_error: "Candidate level must be one of Junior, Middle, Senior or Principal.",
  }),
});

export type AssignmentFormData = z.infer<typeof assignmentFormSchema>;
