import Link from "next/link";

function NavBar() {
  return (
    <div>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link href="/" className="text-orange-800  hover:underline font-roboto_slab font-bold">
              Home
            </Link>
          </li>
          <li className="ml-auto">
            <Link href="/posts" className="text-orange-800 hover:underline">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-orange-800 hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
