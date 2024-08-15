import "./globals.css";
import Header from "@/Components/Header";
import Link from "next/link";

export const metadata = {
  title: "Love UI",
  description: "Love Calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className='flex flex-col items-center h-screen'>
        {/* {Header} aise nhi */}
        {/* aise */}
        <div className='bg-pink-500 px-5 py-5 w-full flex justify-center items-center mb-10'>
        <h1 className='font-extrabold text-3xl'>U&I❤️‍🔥</h1>
        <Link href={'/'} className='font-extrabold text-3xl'>Letters</Link> {/* routing ke liye app me folder banana hai */}
        </div>
        {children}
      </body>
    </html>
  );
}
