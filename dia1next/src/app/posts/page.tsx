import Link from "next/link";

export default function Page() {
  return (
    <ul>
      <li>
        <Link href={"/posts/1"}>Post 1</Link>
      </li>
      <li>
        <Link href={"/posts/2"}>Post 2</Link>
      </li>
      <li>
        <Link href={"/posts/3"}>Post 3</Link>
      </li>
    </ul>
  );
}
