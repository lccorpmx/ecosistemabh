import React from 'react'
import PCatalogo from '../components/productCatalogo'
import Header from '../components/header'


export default function pBaterias() {
  return (
    <div className="pb-4">
        <div>
        <Header></Header>
        <div>
        <p className="text-center z-10 text-2xl bold text-white pt-4"><span className='text-yellow-400'>BATERIAS</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
            <PCatalogo producto='Brass Knuckles' imagen="/brass.png" page='https://wa.me/5620388381' precio='$400'></PCatalogo>
            <PCatalogo producto='Ccell Automatica' imagen="/ccell.png" page='https://wa.me/5620388381' precio='$550'></PCatalogo>
            <PCatalogo producto='Kodo Pro' imagen="/kodo.png" page='https://wa.me/5620388381' precio='$900'></PCatalogo>
            <PCatalogo producto='Lookah bear' imagen="/lookhabear.png" page='https://wa.me/5620388381' precio='$1100'></PCatalogo>
            <PCatalogo producto='Cloack' imagen="/cloack.png" page='https://wa.me/5620388381' precio='$1200'></PCatalogo>
        </div>

        </div>
        </div>
    </div>
  )
}
