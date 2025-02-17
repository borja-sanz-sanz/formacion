"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { formSchema, FormSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitAction } from "./submitAction";

export const Form = () => {
  const form = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmitForm: SubmitHandler<FormSchema> = (data) => {
    console.log("validaciones correctas");
    submitAction(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col gap-4 m-6 max-w-[300px]"
      >
        <div>
          <input
            className="border border-black p-2"
            placeholder="name"
            {...register("name")}
            id="name"
          />
          <p className="text-red-600">{errors.name && errors.name.message}</p>
        </div>
        <div>
          <input
            className="border border-black p-2"
            placeholder="lastname"
            {...register("lastname")}
            id="lastname"
          />
          <p className="text-red-600">
            {errors.lastname && errors.lastname.message}
          </p>
        </div>
        <div>
          <input
            className="border border-black p-2"
            placeholder="email"
            {...register("email")}
            id="email"
            type="email"
          />
          <p className="text-red-600">{errors.email && errors.email.message}</p>
        </div>
        <button type="submit" className="bg-black text-white p-4">
          Enviar formulario
        </button>
      </form>
    </div>
  );
};
