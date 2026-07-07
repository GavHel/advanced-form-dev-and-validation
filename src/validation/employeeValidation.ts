import { z } from "zod";

export const employeeValidation = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .includes("@", {
      message: "Please enter a valid email",
    }),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .length(10, "Phone number must be 10 digits"),

  postalCode: z
    .string()
    .min(1, "Postal code is required")
    .min(6, "Postal code is too short"),
});