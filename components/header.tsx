import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";
import logo from "../public/LogoBHNegro.png"
import Link from "next/link";

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
    <header className="flex justify-center items-center bg-white">
      <Link href="/home">
          <Image src={logo} alt="Logo" width={60}/>
      </Link>
    </header>
  );
}
export default Header;
