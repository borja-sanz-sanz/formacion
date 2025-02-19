import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Titulo base character",
  description: "description base character",
};

export default function CharactersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
