import { createElement } from "react";
import { LAYOUT_ONE_COL_HEADER, LAYOUT_TWO_COL } from "./constants";
import { OneColHeader } from "./sections/OneColHeader/OneColHeader";
import { TwoCol } from "./sections/TwoCol/TwoCol";

type LayoutBuilderProps = {
  layout_builder__layout: any;
};

export const LayoutBuilder = ({
  layout_builder__layout,
}: LayoutBuilderProps) => {
  return (
    <>
      {layout_builder__layout.map((data, index) => {
        switch (data.layout_id) {
          case LAYOUT_ONE_COL_HEADER:
            return <OneColHeader components={data.components} />;
          case LAYOUT_TWO_COL:
            return <TwoCol components={data.components} />;
          default:
            return <>Layout {data.layout_id} is not defined yet</>;
        }
      })}
    </>
  );
};
