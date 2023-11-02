import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";
import logo from "../public/LogoBHNegro.png"
import Link from "next/link";
import DownloadButton from '@/components/DownloadButton';
import DownloadButtonCDMX from '@/components/DownloadButtonCDMX';
import DownloadButtonBeeHeatlhy from "./DownloadButtonBeeHealthy";
import { LuMenuSquare } from 'react-icons/lu';


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
      <Sheet>
      <style>
    {`
      .your-custom-class {
        background-color: rgba(0, 0, 0, 0.5); /* Ajusta el valor alpha (0.5) para controlar la opacidad */
        /* Opcional: puedes aplicar otros estilos de fondo, como una imagen de fondo */
      }
    `}
  </style>
  <SheetTrigger className="text-black"><LuMenuSquare
        className="text-2xl">
        </LuMenuSquare></SheetTrigger>
  <SheetContent className="your-custom-class">
    <SheetHeader>
      <SheetTitle className="pt-2">Bee High México</SheetTitle>
      <SheetDescription>
       <DownloadButton></DownloadButton>
       <DownloadButtonCDMX></DownloadButtonCDMX>
       <DownloadButtonBeeHeatlhy></DownloadButtonBeeHeatlhy>
       <div>
        <p className="text-xl font-bold pt-6 underline">Resenas</p>
       </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      </div>
    </header>
  );
}
export default Header;
