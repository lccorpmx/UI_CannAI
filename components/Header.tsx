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
    <div>
    <header className="bg-black p-4 text-white flex items-center justify-center">
      <h1 className=' lg:text-4xl text-xl text-green-400 font-bold'>CannAsisst IA</h1>
</header>
</div>
  )
}
