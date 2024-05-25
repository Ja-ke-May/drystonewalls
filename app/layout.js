import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dry Stone Walls by Jacob May",
  description: "Dry Stone Walls by Jacob May. Huddersfield based dry stone waller available for work. Learn how to dry stone wall, the history of walling, types of walls around the UK and test your knowledge with the dry stone walling quiz.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="bg-[#0c2600] text-white font-mono">
      <body className={inter.className}>
      <Link href="/homepage" passHref><img
          src="images/main-logo.png"
          className="fixed top-0 left-0 m-2 h-10 max-h-20 md:h-20 md:max-w-40 z-10"
          alt="JM logo"
        /></Link>
        {children}
      
        </body>
    </html>
  );
}
