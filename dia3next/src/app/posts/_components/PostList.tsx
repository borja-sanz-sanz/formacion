import { PostCard } from "./PostCard";
import { Post } from "./types";

export const PostList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: Post[] = await response.json();

  return (
    <>
      {data.map((post) => (
        <PostCard post={post} key={`post-${post.id}`} />
      ))}
    </>
  );
};
