import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  console.log("secret::", secret);
  console.log("slug", slug);

  if (secret !== process.env.DRAFT_MODE_SECRET || !slug) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();

  redirect(slug);
}

//http://localhost:3000/api/draft?secret=lkjyr87345620o344gjkwaget&slug=/users
