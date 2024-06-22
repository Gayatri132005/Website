import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400",'600', "700", "500"],
  variable:'--font-roboto'
});

export const metadata: Metadata = {
  title: "Drone Buddy",
  description: "Drone buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins_init.className}>{children}</body>
    </html>
  );
}
