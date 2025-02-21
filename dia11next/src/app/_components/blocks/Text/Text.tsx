export const Text = ({ data }: { data: any }) => {
  return (
    <>
      <h1 className="font-bold text-xl">{data.info}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.body.value }}></div>
    </>
  );
};
