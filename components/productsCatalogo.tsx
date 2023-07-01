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
    <div className='flex justify-center items-center pt-6 pb-6'>
      <div className='bg-white w-30
       rounded-3xl flex flex-col items-center p-6'>
        <p className='text-black text-3xl'>{producto}</p>
        <div>
        <Image
          className='rounded-xl p-1'
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
