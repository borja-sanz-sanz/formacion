import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  try {
    const response = await fetch(
      `https://dragonball-api.com/api/characters/${id}`
    );

    if (response.status === 500) {
      return notFound();
    }
    const data = await response.json();

    return (
      <div>
        <h1>Nombre: {data.name}</h1>
        <img src={data.image} width={100} />
        <p>{data.description}</p>
      </div>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}

export async function generateStaticParams() {
  const result = await fetch("https://dragonball-api.com/api/characters/");
  const data = await result.json();

  return data.items.map((character: { id: string }) => ({
    id: String(character.id),
  }));
}
