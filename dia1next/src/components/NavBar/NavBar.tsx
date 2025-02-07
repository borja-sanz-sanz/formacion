import Link from "next/link";

import styles from "@/components/NavBar/NavBar.module.css";

export const NavBar = () => {
  return (
    <>
      App router menu:
      <div className={styles.appRouter}>
        <Link href="/">Home - app</Link>
        <Link href="/posts-cs">Posts - cs</Link>
        <Link href="/posts-ssg-app">Posts -ssg - app</Link>
        <Link href="/posts-isr-app">Posts -isr - app</Link>
        <Link href="/posts-ssr-app">Posts -ssr - app</Link>

        <Link href="/users-ssg-app">Users -ssg - app</Link>
        <Link href="/users-isr-app">Users - isr - app</Link>
        <Link href="/users-ssr-app">Users - ssr - app</Link>
      </div>
      Pages router menu:
      <div className={styles.pageRouter}>
        <Link href="/posts-pages">Posts - pages</Link>
        <Link href="/posts-cs-page">Posts - cs - pages</Link>
        <Link href="/posts-ssg-page">Posts - ssg - pages</Link>
        <Link href="/posts-isr-page">Posts - isr - pages</Link>
        <Link href="/posts-ssr-page">Posts - ssr - pages</Link>
        <Link href="/users-ssg-page">Users - ssg - pages</Link>
        <Link href="/users-isr-page">Users - isr - pages</Link>
        <Link href="/users-ssr-page">Users - ssr - pages</Link>
      </div>
    </>
  );
};

/**
 * Home - app   /
 * Posts - app  /posts-app
 * Posts - pages /posts-pages
 */
