'use client'

import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "../components/layouts/navbar";
import Footer from "@/components/layouts/footer";

const disableNavbar = ['/auth', '/admin', '/not-found']
const disableFooter = ['/auth', '/admin', '/not-found']

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const isNavbarDisabled = disableNavbar.some((path) => pathName.startsWith(path))
  const isFooterDisable = disableFooter.some((path) => pathName.startsWith(path))

  return (
    <html lang="en">
      <body className=''>
        {!isNavbarDisabled && <Navbar />}
        {children}
        {!isFooterDisable && <Footer />}
      </body>
    </html>
  );
}
