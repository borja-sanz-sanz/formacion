export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return <>Dynamic slug page {slug}</>;
}

//habilitar una url /characters
//y permitir acceder a /characers/idPersonaje
//renderizando los datos de cada uno de los personajes
