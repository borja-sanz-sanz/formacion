"use server";

import { formSchema, FormSchema } from "./constants";

export const submitAction = (data: FormSchema) => {
  try {
    formSchema.parse({
      name: data.name,
      lastname: data.lastname,
      email: data.email,
    });

    console.log(
      "Formulario enviado correctamente con los datos",
      JSON.stringify(data)
    );
  } catch (e) {
    console.error(e);
  }
};

// nuevo formulario de registro
// Nombre
// appellidos
// email
// contraseña
// direccion
