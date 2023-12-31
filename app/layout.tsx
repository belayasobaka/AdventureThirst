import {Modak, Nunito} from "next/font/google";
import './globals.css'
import Navbar from "@/app/components/navbar/Navbar";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";
import LoginModal from "@/app/components/modals/LoginModal";
import React from "react";
import getCurrentUser from "@/app/actions/getCurrentUser";
import RentModal from "@/app/components/modals/RentModal";
import SearchModal from "@/app/components/modals/SearchModal";

export const metadata = {
  title: 'AdventureThirst',
  description: 'AdventureThirst site',
}

const font = Nunito ({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
      <ToasterProvider/>
      <SearchModal />
      <RentModal/>
      <LoginModal />
      <RegisterModal/>
      <Navbar currentUser={currentUser} />
      <div className="pb-20 pt-28">
        {children}
      </div>
      </body>
    </html>
  )
}
