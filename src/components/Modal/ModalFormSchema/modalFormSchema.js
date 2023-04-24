import { z } from "zod";

export const modalFormSchema = z.object({
  title: z.string().nonempty("O campo abaixo é obrigatório"),
  status: z.string().nonempty("O campo abaixo é obrigatório"),
});
