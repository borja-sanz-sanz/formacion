import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, "El nombre debe de tener al menos 3 caracters")
    .max(20, "El nombre no puede superar los 2o caracteres"),
  lastname: z.string(),
  email: z.string().email("El campo email tiene que ser de tipo email"),
});

export type FormSchema = z.infer<typeof formSchema>;
