import { PostList } from "@/components/PostsList";
import { useEffect, useState } from "react";

export default function PostCSPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[] | undefined>();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {/* <NavBar /> */}
      <PostList posts={posts}></PostList>
      {}
    </>
  );
}
