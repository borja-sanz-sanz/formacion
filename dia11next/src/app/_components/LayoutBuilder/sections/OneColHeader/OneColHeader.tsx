import { BlockContent } from "@/app/_components/BlockContent/BlockContent";

type OneColHeaderProps = {
  components: any;
};

export const OneColHeader = ({ components }: OneColHeaderProps) => {
  return (
    <div className="border border-black w-full p-4 my-4">
      {components.map((component: any, index: number) => (
        <BlockContent
          block={component.configuration}
          key={`block-one-col-${index}`}
        />
      ))}
    </div>
  );
};
