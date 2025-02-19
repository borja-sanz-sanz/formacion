import { notFound } from "next/navigation";
import { drupal } from "../../../drupal/drupal";

export default async function Page() {
  const response = await drupal.translatePathFromContext({
    params: { slug: "/la-udla/sobre-nosotros" },
  });

  if (!response) {
    return notFound();
  }

  const entity = await drupal.getResourceFromContext(response, {
    params: { slug: "/la-udla/sobre-nosotros" },
  });

  return <div>{JSON.stringify(entity)}</div>;
}
