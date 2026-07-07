import { z } from "zod";

export const signInValidation = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .includes("@", {
      message: "Please enter a valid email",
    }),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const signUpValidation = z
  .object({
    fullName: z
      .string()
      .min(1, "Full name is required")
      .min(2, "Please enter your full name"),

    email: z
      .string()
      .min(1, "Email is required")
      .includes("@", {
        message: "Please enter a valid email",
      }),

    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password"),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );