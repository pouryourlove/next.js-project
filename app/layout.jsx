import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" flex flex-col px-4 py-2 min-h-screen">
        <header>
          <ul className="flex gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs">[footer]</footer>
      </body>
    </html>
  );
}

//client-side navigation
//to make it a singple page application
