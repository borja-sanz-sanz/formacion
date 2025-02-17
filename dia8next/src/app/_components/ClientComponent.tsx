"use client";

import { error } from "console";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";

export const ClientComponent = () => {
  const searchParams = useSearchParams();
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const error = searchParams.get("error");

  const handleClick = async () => {
    const response = await signIn("credentials", {
      redirect: true,
      username: userNameRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
      callbackUrl: "/area-privada",
    });

    console.log("response", response);
  };
  return (
    <div className="flex flex-col gap-4 max-w-[400px] m-12">
      <input
        placeholder="Usuario"
        className="border border-black p-2"
        ref={userNameRef}
        type="text"
      />
      <input
        placeholder="Password"
        className="border border-black p-2"
        ref={passwordRef}
        type="password"
      />
      <button onClick={() => handleClick()} className="bg-black text-white p-4">
        Iniciar sesión
      </button>
      {error && "Inicio de sesión incorrecto revise los datos"}
    </div>
  );
};
