import {
  NODE_CAREER,
  NODE_LANDING,
  TAXONOMY_FACULTY,
} from "@/drupal/constants";
import { drupal } from "@/drupal/drupal";
import { notFound } from "next/navigation";
import { NodeLanding } from "../_components/NodeLanding/NodeLanding";
import { NodeCareer } from "../_components/NodeCareer/NodeCareer";
import { TaxonomyFaculty } from "../_components/TaxonomyFaculty/TaxonomyFaculty";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const response = await drupal.translatePathFromContext({ params: { slug } });

  if (!response) {
    return notFound();
  }

  const entity = await drupal.getResourceFromContext(response, {
    params: { slug },
  });

  switch (entity.type) {
    case NODE_LANDING:
      return <NodeLanding entity={entity} />;
    case NODE_CAREER:
      return <NodeCareer entity={entity} />;
    case TAXONOMY_FACULTY:
      return <TaxonomyFaculty entity={entity} />;
    case TAXONOMY_FACULTY:
      return notFound();
  }
}
