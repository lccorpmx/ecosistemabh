import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";
import logo from "../public/LogoBHNegro.png"
import Link from "next/link";
import DownloadButton from '@/components/DownloadButton';
import DownloadButtonCDMX from '@/components/DownloadButtonCDMX';
import DownloadButtonBeeHeatlhy from "./DownloadButtonBeeHealthy";
import { LuMenuSquare } from 'react-icons/lu';
import { IoChevronBackOutline } from 'react-icons/io5';


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function HeaderPromos() {
  return (
    <header className="flex items-center justify-between bg-white p-2">
         <Link href="/home">
      <div className="flex flex-row items-center">
        <div className="">
        <IoChevronBackOutline className="text-black w-8 h-8"></IoChevronBackOutline>
        </div>
        <div>
        <p className="text-black">Inicio</p>
        </div>
      </div>
      </Link>

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
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      </div>
    </header>
  );
}
export default HeaderPromos;
