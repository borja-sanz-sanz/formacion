import { useEffect, useRef, useState } from "react";
import { Post } from "./types";
import { Pencil } from "lucide-react";
import React from "react";

export const Posts = () => {
  const [postList, setPostList] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [inputTextValue, setInputTextValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPostList(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Se ha producido un error", error);
      }
    };
    fetchPosts();
  }, []);

  const handleEditPost = (post: Post) => {
    setInputTextValue(post.title);
    setEditingPost(post);
  };

  const handleEditClick = () => {
    const newPostList = postList?.map(post => {
        if(post.id === editingPost?.id){
            post.title = inputRef.current?.value || ''
        }
        return post
    })
    if(newPostList){
    setPostList(newPostList)
}
  }

  const handleColorChangeClick = () => {
    inputRef.current.style.color = 'red'
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={inputTextValue}
          onChange={(e) => setInputTextValue(e.target.value)}
          placeholder="Editar titulo del post"
          ref={inputRef}
        ></input>
        <button onClick={handleEditClick}>Editar titulo</button>
        <button onClick={handleColorChangeClick}>Cambiar color</button>
      </div>
      {isLoading ? (
        "Loading ...."
      ) : (
        <div>
          {postList?.map((post, index) => {
            return (
              <React.Fragment key={`post-${index}`}>
                <div>
                  {" "}
                  Titulo del post: {post.title}
                  <br />
                  <button onClick={() => handleEditPost(post)}>
                    <Pencil />
                  </button>
                </div>
                <br />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </>
  );
};
