import { JsonApiResource } from "next-drupal";
import { LayoutBuilder } from "../LayoutBuilder/LayoutBuilder";

export type NodeLandingProps = {
  entity: JsonApiResource;
};
export const NodeLanding = ({ entity }: NodeLandingProps) => {
  return (
    <>
      Nodo landing
      <div className="my-10">
        <LayoutBuilder
          layout_builder__layout={entity.layout_builder__layout}
        ></LayoutBuilder>
      </div>
    </>
  );
};
