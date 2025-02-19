export default async function Page() {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();

  return <div>{JSON.stringify(data)}</div>;
}
