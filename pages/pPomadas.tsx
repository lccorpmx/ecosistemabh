import React from 'react'
import PCatalogo from '../components/productCatalogo'
import Header from '../components/header'


export default function pPomadas() {
  return (
    <div className="pb-4">
        <div>
        <Header></Header>
        <div>
        <p className="text-center z-10 text-2xl bold text-white pt-4">Pomadas<span className='text-yellow-400'></span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Pomada de la Abuela' imagen="/pomadaabuela.png" page='https://wa.me/5620388381' precio='1000MG $1500'></PCatalogo>
        </div>

        </div>
        </div>
    </div>
  )
}
