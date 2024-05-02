import * as z from "zod";

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimum 6 character required",
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email es requerido"
    }),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email es requerido"
    }),
    password: z.string().min(1, {
        message: "Password es requerido"
    }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email es required",
    }),
    password: z.string().min(6, {
        message: "Minimum 6 character required",
    }),
    name: z.string().min(1, {
        message: "Name is required",
    }),
});

export const EditUserProfileSchema = z.object({
    email: z.string().email('Required'),
    name: z.string().min(1, 'Required'),
})