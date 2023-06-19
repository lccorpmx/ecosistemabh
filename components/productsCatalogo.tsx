import React from 'react'
import Link from 'next/link';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });


interface CatalogoProps {
  //imagen: string;
  producto: string;
}


export default function productsCatalogo( {producto}:CatalogoProps) {
  return (
    <div className='bg-white w-1/2 h-full'>
        <p className='text-black'>{producto}</p>
    </div>
  )
}
