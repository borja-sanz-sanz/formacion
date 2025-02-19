import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://dragonball-api.com/api/characters");
  const data = await response.json();
  console.log(data);

  const sitemap = data.items.map((character: { image: any }) => {
    return {
      url: character.image,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    };
  });
  return sitemap;
}
