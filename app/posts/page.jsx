import Heading from "@/components/Heading";
import Link from "next/link";

export default function PostPage() {
  return (
    <>
      <Heading>Posts</Heading>
      <ul>
        <li>
          <Link href="/posts/appearance">Apperance</Link>
        </li>
        <li>
          <Link href="./posts/favorites">Favorites</Link>
        </li>
      </ul>
    </>
  );
}
