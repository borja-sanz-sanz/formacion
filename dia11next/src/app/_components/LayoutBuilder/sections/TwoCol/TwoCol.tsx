import { BlockContent } from "@/app/_components/BlockContent/BlockContent";

type TwoColProps = {
  components: any;
};

export const TwoCol = ({ components }: TwoColProps) => {
  return (
    <div className="flex">
      <div className="border border-black p-4 w-[50%]">
        {components
          .filter((component, index) => {
            return component.region === "first";
          })
          .map((component: any, index: number) => (
            <BlockContent
              block={component.configuration}
              key={`block-one-col-${index}`}
            />
          ))}
      </div>
      <div className="border border-black p-4 w-[50%]">
        {components
          .filter((component, index) => {
            return component.region === "second";
          })
          .map((component: any, index: number) => (
            <BlockContent
              block={component.configuration}
              key={`block-one-col-${index}`}
            />
          ))}
      </div>
    </div>
  );
};
