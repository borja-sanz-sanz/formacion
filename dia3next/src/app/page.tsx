import Image from "next/image";
import { Server } from "./_components/Server";
import { Client } from "./_components/Client";
import { StyledDiv } from "./_components/StyledDiv";
import { SecondStyledDiv } from "./_components/SecondStyledDiv";

export default function Home() {
  return (
    <>
      <p>
        {/* <Server></Server> */}
        <Client>
          <Server>
            <></>
          </Server>
        </Client>
      </p>
      <StyledDiv />
      <SecondStyledDiv />
    </>
  );
}

//Server component - por defecto
//NO envia JS al navegador del usuario
//solo envia codigo HTML renderizado

//Client component - "use client"
//Envia su JS al navegador del usuario
// Siempre que haya interaccion o estados
