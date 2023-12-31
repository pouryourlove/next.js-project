import Heading from "@/components/Heading";
import Link from "next/link";
import { getReviews } from "@/lib/reviews";


export default async  function PostPage() {
  const reviews = await getReviews()

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
            <h2 className="py-1 text-center font-semibold font-roboto_slab">Apperance</h2>
          </Link>
        </li>
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="/posts/favorites">
            <img
              src="/images/doggie2.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t"
            />

            <h2 className="py-1 text-center font-semibold font-roboto_slab">Favorites</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
