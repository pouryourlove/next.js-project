import NavBar from "@/components/NavBar";
import "./globals.css";
import { exo_2, roboto_slab } from "./fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto_slab.variable} ${exo_2.variable}`}>
      <body className=" bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs text-slate-500">This is a footer</footer>
      </body>
    </html>
  );
}

//client-side navigation
//to make it a singple page application
