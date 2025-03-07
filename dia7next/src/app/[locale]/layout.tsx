import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

/* import { notFound } from "next/navigation"; */
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  console.log("routing11", routing);
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  /* const messages = await getMessages(); */

  return (
    <>
      <ul>
        <li>
          <Link href={"/es"}>Español</Link>
        </li>
        <li>
          <Link href={"/en"}>Ingles</Link>
        </li>
        <li>
          <Link href={"/de"}>Aleman</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
