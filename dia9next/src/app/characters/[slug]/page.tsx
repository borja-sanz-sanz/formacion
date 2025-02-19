import { Metadata } from "next";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const response = await fetch(
    `https://dragonball-api.com/api/characters/${slug}`
  );

  const data = await response.json();

  return (
    <div>
      <h1>Nombre: {data.name}</h1>
      <img src={data.image} width={100} />
      <p>{data.description}</p>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const response = await fetch(`https://dragonball-api.com/api/characters/1`);

  const data = await response.json();

  return {
    title: data.name,
    description: data.description,
  };
}

export async function generateStaticParams() {
  const result = await fetch("https://dragonball-api.com/api/characters/");
  const data = await result.json();

  return data.items.map((character: { id: string }) => ({
    slug: String(character.id),
  }));
}
