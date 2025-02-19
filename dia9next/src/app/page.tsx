import { Metadata } from "next";
import Image from "next/image";

/* export const metadata: Metadata = {
  title: "Formacion UDLA page title",
  description: "descripción de mi página sin layout",
}; */

export async function generateMetadata(): Promise<Metadata> {
  console.log("generate metadata");
  return {
    title: "title",
    description: "title",
  };
}

export default function Home() {
  console.log("home page");
  return "Home";
}
