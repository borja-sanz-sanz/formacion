import Link from "next/link";

export default function Page() {
  return (
    <ul>
      <li>
        <Link href={"/characters/1"}>Character 1</Link>
      </li>
      <li>
        <Link href={"/characters/2"}> Character 2</Link>
      </li>
      <li>
        <Link href={"/characters/3"}>Character 3</Link>
      </li>
      <li>
        <Link href={"/characters/4"}>Character 4</Link>
      </li>
    </ul>
  );
}
