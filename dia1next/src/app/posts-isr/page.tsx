import { PostServer } from "./_components/PostsServer";

export const revalidate = 30;

export default function Page() {
  return (
    <>
      <PostServer />
    </>
  );
}
