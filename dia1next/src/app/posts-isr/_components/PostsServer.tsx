export const PostServer = async () => {
  console.log("Post server rendering");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log("posts fetched");

  return <>{JSON.stringify(data)}</>;
};
