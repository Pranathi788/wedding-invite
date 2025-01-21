import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Lobster } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"], // Supports Latin characters
  weight: "300", // '300' corresponds to the "Light" weight
  variable: "--font-josefin-sans", // Define a CSS variable for easier use
  display: "swap", // Ensures text visibility during font loading
});
const lobster = Lobster({
  subsets: ["latin"],
  weight: "400", // Lobster only has regular (400) weight
  variable: "--font-lobster", // Optional for custom properties
  display: "swap", // Ensures visible text during font load
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: "400", // Regular weight
  display: "swap", // Ensures text is visible while font loads
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jnanendra & Pranathi",
  description: "Wedding Invite for Jnanendra & Pranathi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dancingScript.variable} ${lobster.variable} ${josefinSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
