"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Zzong's day of the day</h1>
      <ul>
        <li>
          <Link href="/posts/appearance">appearane</Link>
        </li>
        <li>
          <Link href="/posts/favorites">favorites</Link>
        </li>
      </ul>
    </>
  );
}
