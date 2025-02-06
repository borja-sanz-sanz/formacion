import Link from "next/link";
import { ReactNode } from "react";

export default function BlogLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="mt-4 text-sm mb-4">
      <ul>
        <li>
          <Link href="/blog/category-first">Category first</Link>
        </li>
        <li>
          <Link href="/blog/category-second">Category second</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
