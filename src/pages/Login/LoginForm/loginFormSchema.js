import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .email("Insira um e-mail válido")
    .nonempty("Preencha o campo abaixo"),
  password: z.string().nonempty("Preencha o campo abaixo"),
});
