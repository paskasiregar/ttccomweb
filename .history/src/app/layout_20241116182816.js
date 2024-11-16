import { DM_Sans } from "@next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"], // Always specify subsets
  weight: ["400", "500", "700"], // Specify valid weights
  variable: "--font-dm-sans", // Optional, useful for CSS variables
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
