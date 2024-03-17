import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Me pedeAi",
  description: "Seu pedido está aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastContainer
          position="top-center"
          autoClose={3000}
          pauseOnHover={false}
          theme="dark"
        />
        {children}</body>
    </html>
  );
}
