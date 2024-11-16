import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Include only the weights you need
  variable: "--font-dm-sans", // Optional: CSS variable for global use
});

export const metadata = {
  title: "Tiny Tech Club",
  description: "Small techies, big dreams 🚀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
