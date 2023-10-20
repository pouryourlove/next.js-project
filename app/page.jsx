"use client";
import Heading from "@/components/Heading";
import Link from "next/link";


export default function HomePage() {
  return (
    <>
      <Heading>Zzong's day of the day</Heading>
      <p className="pb-3">the best posts</p>
     <div className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href="./posts/favorites" className="flex">
            <img
              src="/images/doggie2.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t"
            />

            <h2 className="py-1 text-center font-semibold font-roboto_slab">Favorites</h2>
          </Link>
        </div>
    
    </>
  );
}
