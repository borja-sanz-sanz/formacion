import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        <a href="/contact">Contact</a>
      </p>
      <p>
        <Link href={"/contact"}>Contact SPA</Link>
        --
      </p>
    </>
  );
}

//CS Client Side renderizado del lado de cliente (Tradicional React)
//SSR Server Side Rendering del lado del servidor, se ejecuta con cada llamada, tradicional PHP, Java
//SSG Static Site Generation renderizado estatico, se ejecuta una primera vez y guarda esa versión en cache, no revalida
//ISR Incremental Site Regeneration renderizado estatico, pero que revalida en base a unos criterios
