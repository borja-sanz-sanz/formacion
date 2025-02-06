export const dynamic = "force-dynamic";

export default async function Page() {
  console.log("calling ssr page");
  const response = await fetch("https://randomuser.me/api/?results=5");
  const data = await response.json();
  console.log("requested data succesfully");

  return <>{JSON.stringify(data)}</>;
}
