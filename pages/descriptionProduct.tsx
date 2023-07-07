import React from 'react'
import Header from '../components/header'
import Image from 'next/image'

export default function descriptionProduct() {
  return (
    <div>
        <Header></Header>

        <p className="text-center z-10 text-2xl bold text-white pt-4">CART <span className='text-yellow-400'>LÍNEA 98% </span>1.1G</p>

        <div className='p-10'>
        <Image
          className='rounded-xl'
          src={"/estantecart.png"}
          alt='Mi imagen'
          width={1080}
          height={1080}
        />
        </div>

        <div className='p-6'>
          <p className="text-rigth z-10 text-2xl bold text-yellow-400 pt-4">STRAINS</p>
          <div className='grid grid-rows-4 grid-flow-col gap-2 w-1/2'>
            <div><p>Clementine</p></div>
            <div><p>Clementine</p></div>
            <div><p>Clementine</p></div>
            <div><p>Clementine</p></div>
            <div><p>Clementine</p></div>
            <div><p>Clementine</p></div>
            <div><p>Clementine</p></div>
            <div><p>Clementine</p></div>
            <div><p>Clementine</p></div>
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}
