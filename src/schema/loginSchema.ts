// schemas/loginSchema.ts
import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("invalid email").email("Invalid email"),
    password: z.string().min(1, "Password is required"),
})

export type LoginSchema = z.infer<typeof loginSchema>
