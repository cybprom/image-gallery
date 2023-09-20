import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Image Gallery",
  description: "Drag-and-Drop Images in the Gallery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <main className="max-w-6xlmx-auto">{children}</main>
      </body>
    </html>
  );
}
