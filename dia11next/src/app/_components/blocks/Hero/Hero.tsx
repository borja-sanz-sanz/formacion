import Link from "next/link";

export const Hero = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl mb-4">{data.info}</h1>
      <Link className="bg-blue-500 p-4 rounded mb-12" href={data.link.url}>
        {data.link.title}
      </Link>
      <div dangerouslySetInnerHTML={{ __html: data.text.value }}></div>
      {
        <img
          width={100}
          src={
            data.media_custom_block.media_image.resourceIdObjMeta
              .imageDerivatives.links.large.href
          }
        />
      }
    </div>
  );
};
