"use client";
import { showData } from "../showData";

export const Client = () => {
  return (
    <>
      Client component
      <button onClick={() => showData("Client component")}> button</button>
    </>
  );
};
