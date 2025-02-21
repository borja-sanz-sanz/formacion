import Link from "next/link";
import { CUSTOM_CARD_VIEWMODES } from "./constants";

export const CustomCard = ({
  data,
  viewMode,
}: {
  data: any;
  viewMode: string;
}) => {
  //@ts-ignore
  const ViewMode = CUSTOM_CARD_VIEWMODES[viewMode];

  return <ViewMode data={data} />;

  /* return (
    <div className={`${viewMode === "horizontal" ? "flex" : "flex-col"}`}>
      <h1 className="font-bold text-xl">{data.info}</h1>
      <Link href={data.link.url}>{data.link.title}</Link>
      <div dangerouslySetInnerHTML={{ __html: data.text.value }}></div>

      {
        <img
          width={100}
          src={
            data.image.media_image.resourceIdObjMeta.imageDerivatives.links
              .large.href
          }
        />
      }
    </div>
  ); */
};
