import { drupal } from "@/drupal/drupal";
import { BLOCKS } from "./constants";
import { createElement } from "react";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

type BlockContentProps = {
  block: { type: keyof typeof BLOCKS; uuid: string };
};

export const BlockContent = async ({ block }: BlockContentProps) => {
  const componentToRender = BLOCKS[block.type];

  const params = new DrupalJsonApiParams();
  if (block.type === "hero") {
    params.addInclude(["media_custom_block", "media_custom_block.media_image"]);
  }

  const blockResult = await drupal.getResource(
    `block_content--${block.type}`,
    block.uuid,
    {
      params: params.getQueryObject(),
    }
  );

  console.log("componentToRender");
  if (componentToRender === undefined) {
    return <></>;
  }
  return <>{createElement(componentToRender, { data: blockResult })}</>;
};
