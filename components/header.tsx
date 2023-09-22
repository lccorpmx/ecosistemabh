import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";
import logo from "../public/LogoBHNegro.png"
import Link from "next/link";
import DownloadButton from '@/components/DownloadButton';


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function Header() {
  return (
    <header className="flex items-center justify-between bg-white pr-6 pl-6">
      <div>
      <Link href="/home">
          <Image src={logo} alt="Logo" width={60}/>
      </Link>
      </div>

      <div className="text-black">
      <DownloadButton></DownloadButton>
      </div>
    </header>
  );
}
export default Header;
