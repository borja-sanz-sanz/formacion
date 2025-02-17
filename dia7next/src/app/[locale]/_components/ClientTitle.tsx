"use client";

import { ReactNode } from "react";

type ClientTitleProps = {
  title: string;
  children: ReactNode;
};

export const ClientTitle = ({ title, children }: ClientTitleProps) => {
  return (
    <div>
      <p>client title: {title}</p>
      <p>{children}</p>
    </div>
  );
};
