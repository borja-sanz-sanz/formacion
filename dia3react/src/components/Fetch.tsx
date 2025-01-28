import { useEffect, useState } from "react";
import { Post } from "./types";

export const Fetch = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {isLoading ? (
        "Loading...."
      ) : (
        <div>
          {posts?.map((post) => {
            return (
              <div
                style={{ border: "1px solid black", marginBottom: "10px" }}
                key={post.id}
              >
                {post.title}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
