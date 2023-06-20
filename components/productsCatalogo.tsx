import React from 'react'
import Link from 'next/link';
import { Inter } from '@next/font/google';
import Image from 'next/image'
import BotonPersonalizado from '../components/BotonPersonalizado';

const inter = Inter({ subsets: ['latin'] });

interface CatalogoProps {
  imagen: string;
  producto: string;
}


export default function productsCatalogo({ producto, imagen }: CatalogoProps) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white w-1/2 h-950
       rounded-3xl flex flex-col items-center pb-2 pt-2'>
        <p className='text-black text-4xl'>{producto}</p>
        <Image
          className='rounded-xl'
          src={imagen}
          alt='Mi imagen'
          width={400}
          height={900}
        />
        <BotonPersonalizado
          texto="Continuar"
          colorF="bg-black"
          colorT="text-white"
        />
      </div>
    </div>
  );
}
