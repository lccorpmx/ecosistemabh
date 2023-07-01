import React from 'react'
import Link from 'next/link';
import { Inter } from '@next/font/google';
import Image from 'next/image'
import BotonPersonalizado from '../components/BotonPersonalizado';

const inter = Inter({ subsets: ['latin'] });

interface CatalogoProps {
  imagen: string;
  producto: string;
  page: string;
}


export default function productsCatalogo({ producto, imagen, page }: CatalogoProps) {
  return (
    <div className='flex justify-center items-center w-30'>
      <div className='bg-white
       rounded-3xl flex flex-col items-center p-6'>
        <p className='text-black text-xl'>{producto}</p>
        <div className='mb-2'>
        <Image
          className='rounded-xl'
          src={imagen}
          alt='Mi imagen'
          width={1080}
          height={1080}
        />
        </div>
        <Link href={page}>
        <BotonPersonalizado
          texto="Ver"
          colorF="bg-black"
          colorT="text-white"
        />
        </Link>
      </div>
    </div>
  );
}
