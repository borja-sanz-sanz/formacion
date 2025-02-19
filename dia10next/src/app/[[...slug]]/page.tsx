import { notFound } from "next/navigation";
import { drupal } from "../../../drupal/drupal";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const response = await drupal.translatePathFromContext({
    params: { slug },
  });

  if (!response) {
    return notFound();
  }

  const entity = await drupal.getResourceFromContext(response, {
    params: { slug },
  });

  return (
    <div>
      <h1 className="font-bold text-xl">{entity.title}</h1>
      <h2 className="font-bold text-lg">Type: {entity.type}</h2>

      {JSON.stringify(entity)}
    </div>
  );
}
