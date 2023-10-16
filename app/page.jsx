"use client";
import Heading from "@/components/Heading";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Heading>Zzong's day of the day</Heading>
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
