import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My Brand",
  description: "Minimal handmade clothing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-between items-center p-4 bg-gray-100">
          <h1 className="text-2xl font-bold">My Brand</h1>
          <nav className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
