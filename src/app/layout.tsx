import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/classnames";
import Providers from "@/components/providers";

const fontPlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elda",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontPlusJakartaSans.variable,
          "bg-white font-sans antialiased",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
