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
precio:string;
}


export default function productCatalogo({ producto, imagen, page, precio }: CatalogoProps) {
  return (
    <div className='flex justify-center items-center w-30'>
      <div className='bg-white
       rounded-3xl flex flex-col items-center p-4'>
        <div className=''>
        <p className='text-black text-xl'>{producto}</p>
        </div>
        <div>
        <Image
          className='rounded-xl'
          src={imagen}
          alt='Mi imagen'
          width={1080}
          height={1080}
        />
        </div>
        <div className='flex flew-row'>
            <div className='basis-1/2 pr-6'><p className='text-black font-bold text-sm'>{precio}</p></div>
            <div className='basis-1/2'><Link href={page}>
        <BotonPersonalizado
          texto="$"
          colorF="bg-yellow-400"
          colorT="text-black"
        />
        </Link></div>
        </div>
      </div>
    </div>
  );
}
