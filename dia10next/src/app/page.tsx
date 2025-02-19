import Image from "next/image";
import { drupal } from "../../drupal/drupal";
import { notFound } from "next/navigation";

export default async function Home() {
  const response = await drupal.translatePathFromContext({
    params: { slug: "/home" },
    locale: "es",
    locales: ["es"],
    defaultLocale: "es",
  });

  if (!response) {
    return notFound();
  }

  const entity = await drupal.getResourceFromContext(response, {
    params: { slug: "/home" },
    locale: "es",
    defaultLocale: "es",
  });

  return (
    <div>
      Dia 10 next
      {JSON.stringify(entity)}
    </div>
  );
}
