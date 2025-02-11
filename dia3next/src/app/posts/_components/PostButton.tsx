"use client";

export const PostButton = ({ title }: { title: string }) => {
  return <button onClick={() => alert(title)}>Mostrar titulo</button>;
};
