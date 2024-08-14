import "./globals.css";
import Header from "@/Components/Header";

export const metadata = {
  title: "Love UI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className='flex flex-col items-center h-screen'>
        {/* {Header} aise nhi */}
        {/* aise */}
        <Header/> {/* import components as tag */}
        {children}
      </body>
    </html>
  );
}
