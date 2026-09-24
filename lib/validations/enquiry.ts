import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().trim().min(6, "Please enter a valid phone number"),
  message: z.string().trim().max(1000).optional(),
  gemstoneRef: z.string().optional(),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;
