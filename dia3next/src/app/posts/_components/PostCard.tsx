import { PostButton } from "./PostButton";
import { Post } from "./types";

type PostCardProps = {
  post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <PostButton title={post.title} />
    </div>
  );
};
