import { drupal } from "@/drupal/drupal";
import { BLOCKS } from "./constants";
import { createElement } from "react";
import { DrupalJsonApiParams } from "drupal-jsonapi-params";

type BlockContentProps = {
  block: { type: keyof typeof BLOCKS; uuid: string; view_mode: string };
};

export const BlockContent = async ({ block }: BlockContentProps) => {
  const componentToRender = BLOCKS[block.type];

  const viewMode = block.view_mode;

  console.log("type", block.type);
  console.log("viewMode", viewMode);

  const params = new DrupalJsonApiParams();
  if (block.type === "hero") {
    params.addInclude(["media_custom_block", "media_custom_block.media_image"]);
  }
  if (block.type === "custom_card") {
    params.addInclude(["image", "image.media_image"]);
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
  return (
    <>
      {createElement(componentToRender, {
        data: blockResult,
        viewMode: viewMode,
      })}
    </>
  );
};
