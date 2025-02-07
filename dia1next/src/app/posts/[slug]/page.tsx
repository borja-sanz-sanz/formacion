import { POSTS } from "../constants";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = POSTS.filter((post) => {
    return String(post.id) === slug;
  });

  return <>{JSON.stringify(post)}</>;
}

export async function generateStaticParams() {
  return POSTS.map((post) => {
    return { slug: String(post.id) };
  });
}
