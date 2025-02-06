export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return <>{JSON.stringify(data)}</>;
}
