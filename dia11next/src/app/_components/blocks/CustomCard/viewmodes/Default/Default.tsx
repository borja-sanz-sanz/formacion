import Link from "next/link";

export const Default = ({ data }: { data: any }) => {
  return (
    <div className={"flex-col m-10"}>
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
  );
};
