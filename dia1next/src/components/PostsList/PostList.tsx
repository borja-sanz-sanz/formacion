import styles from "@/components/PostsList/PostList.module.css";

type PostListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  posts: any[] | undefined;
};

export const PostList = ({ posts }: PostListProps) => {
  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <div key={`post-${post.id}`} className={styles.postCard}>
              <div>Title: {post.title}</div>
              <div>Description: {post.body}</div>
            </div>
          );
        })}
    </>
  );
};
