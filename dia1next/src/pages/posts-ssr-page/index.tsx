import { PostList } from "@/components/PostsList";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PostsSSRPage({ data }: { data: any[] }) {
  return (
    <>
      <PostList posts={data}></PostList>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const posts = data.results;

  return {
    props: { data: posts },
  };
}
