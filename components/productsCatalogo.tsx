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
    <div className='flex justify-center items-center pt-6 pb-6'>
      <div className='bg-white w-60
       rounded-3xl flex flex-col items-center p-6'>
        <p className='text-black text-4xl'>{producto}</p>
        <div>
        <Image
          className='rounded-xl p-1'
          src={imagen}
          alt='Mi imagen'
          width={100}
          height={900}
        />
        </div>
        <BotonPersonalizado
          texto="Continuar"
          colorF="bg-black"
          colorT="text-white"
        />
      </div>
    </div>
  );
}
