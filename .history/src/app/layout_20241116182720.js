import { DM_Sans } from "@next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"], // Ensure subsets are specified
  weight: ["400", "500", "700"], // Ensure valid weights are used
  variable: "--font-dm-sans", // Optional, for using as a CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
