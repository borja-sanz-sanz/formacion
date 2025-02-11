"use client";

import { ReactNode } from "react";

export const Client = ({ children }: { children: ReactNode }) => {
  console.log("Client component");

  return <>Client {children}</>;
};
