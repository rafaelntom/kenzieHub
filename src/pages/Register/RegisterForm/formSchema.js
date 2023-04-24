import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(2, "O nome deve ter mais de 2 letras"),
    email: z.string().email("Insira um e-mail válido!"),
    password: z
      .string()
      .min(8, "A senha precisa conter pelo menos 8 caracteres!")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    confirmPassword: z
      .string()
      .min(8, "A senha precisa conter pelo menos 8 caracteres!")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    bio: z.string().min(8, "Descrição deve ter mais de 8 caracters"),
    contact: z.string().nonempty("Campo obrigatório!"),
    course_module: z.string().nonempty("Campo obrigatório!"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas digitadas não são iguais!",
    path: ["confirmPassword"],
  });
