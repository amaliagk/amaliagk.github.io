import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const dmSerif = localFont({
  src: [
    {
      path: "../fonts/dm-serif-text/DMSerifText-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/dm-serif-text/DMSerifText-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-dmserif",
});

export const metadata: Metadata = {
  title: "Amalia Gkigkolian — Graphic Designer & Marketing Creative",
  description:
    "Strategic visual communications across branding, digital campaigns, websites, presentations, video, print, and events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
