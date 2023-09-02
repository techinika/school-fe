import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techinika - E Learning Platform",
  description:
    "Techinika is an e-learning platform that provides a wide range of courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
