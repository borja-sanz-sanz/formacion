import { JsonApiResource } from "next-drupal";

export type NodeCareerProps = {
  entity: JsonApiResource;
};
export const NodeCareer = ({ entity }: NodeCareerProps) => {
  return (
    <>
      Nodo career
      {JSON.stringify(entity)}
    </>
  );
};
