import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-courier",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MERIDIAN — Advisory",
  description: "We don't pitch. We already know.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={courier.variable}>
      <body className="bg-[#F5F4F0] text-[#1A1A18] font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
