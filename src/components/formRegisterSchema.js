import { z } from "zod";

export const formRegisterSchema = z.object({
    name: z.string().nonempty("Nome é obrigatorio"),
    email: z.string().nonempty("E-mail é obrigatorio").email("Forneça um e-mail válido"),
    password: z
        .string()
        .nonempty("Senha é obrigatória")
        .min(8, "É necessário pelo menos oito caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/,
            "É necessário conter pelo menos um caracter especial."),
    confirmPassword: z.string().nonempty("É necessário confirmar a senha"),
    bio: z.string().nonempty("A bio é obrigatória"),
    contact: z.string().nonempty("Contato é obrigatorio"),
    course_module: z.string().nonempty("Módulo do curso é obrigatorio"),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
});