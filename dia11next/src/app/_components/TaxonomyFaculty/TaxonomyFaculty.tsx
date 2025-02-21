import { JsonApiResource } from "next-drupal";

export type TaxonomyFacultyProps = {
  entity: JsonApiResource;
};
export const TaxonomyFaculty = ({ entity }: TaxonomyFacultyProps) => {
  return (
    <>
      TaxonomyFaculty
      {JSON.stringify(entity)}
    </>
  );
};
