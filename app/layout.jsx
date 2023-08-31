import "./globals.css";
import { Open_Sans } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Techinika - E Learning Platform",
  description:
    "Techinika is an e-learning platform that provides a wide range of courses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
