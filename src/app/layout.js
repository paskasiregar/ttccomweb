import "./globals.css";

export const metadata = {
  title: "Tiny Tech Club",
  description: "Small techies, big dreams 🚀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dm-sans-custom antialiased">{children}</body>
    </html>
  );
}
