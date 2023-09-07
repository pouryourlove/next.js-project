import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <ul>
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
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}

//client-side navigation
//to make it a singple page application
