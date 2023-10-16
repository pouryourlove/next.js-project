import Heading from "@/components/Heading";
import Link from "next/link";

export default function PostPage() {
  return (
    <>
      <Heading>Posts</Heading>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="/posts/appearance">
            <img
              src="/images/doggie.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t"
            />
            <h2 className="py-1 text-center">Apperance</h2>
          </Link>
        </li>
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="./posts/favorites">
            <img
              src="/images/doggie2.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t"
            />

            <h2 className="py-1 text-center">Favorites</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
