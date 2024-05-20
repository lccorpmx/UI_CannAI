import React from 'react'
import { Separator } from "@/components/ui/separator"
import { IoLogOut } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import Link from 'next/link';
import { MdOutlinePersonAdd } from "react-icons/md";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
export default function Header() {
  return (
    <div>        <header className="bg-black p-4 text-white flex items-center justify-between">
    <div className="pr-4">
    <Sheet>
        <SheetTrigger className="text-xl">☰</SheetTrigger>
        <SheetContent side={"left"}>
        <SheetHeader className="mt-6">
            <SheetDescription className="text-black text-2xl pt-2 text-left">
            CannAI
            </SheetDescription>
            <Separator />
            <div>
            <Link href="/inicio">
                <div className="flex items-center justify-stretch gap-2 mt-4">
                <MdOutlinePersonOutline className="text-2xl text-black" />
                <span className="text-xl text-center hover:text-orange-500">Tus Pacientes</span>
                </div>
            </Link>
            </div>
        </SheetHeader>
        </SheetContent>
    </Sheet>
    </div>
</header>
</div>
  )
}
