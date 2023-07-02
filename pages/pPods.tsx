import React from 'react'
import PCatalogo from '../components/productCatalogo'
import Header from '../components/header'


export default function pFlor() {
  return (
    <div className="pb-4">
        <div>
        <Header></Header>
        <div>
        <p className="text-center z-10 text-2xl bold text-white pt-4">LÍNEA   <span className='text-yellow-400'>DIAMANTE</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Diamond Pod 1.1G' imagen="/diamodpod.png" page='https://wa.me/5620388381' precio='$1650'></PCatalogo>
        </div>

        <p className="text-center z-10 text-2xl bold text-white pt-4">LÍNEA   <span className='text-yellow-400'>98%</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Pod 98% 1.1G' imagen="/pod98.png" page='https://wa.me/5620388381' precio='$1200'></PCatalogo>
        <PCatalogo producto='Pod 98% 2G' imagen="/pod982.png" page='https://wa.me/5620388381' precio='$750'></PCatalogo>
        </div>

        <p className="text-center z-10 text-2xl bold text-white pt-4">LÍNEA   <span className='text-yellow-400'>CBD</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Pod CBD 1.1G' imagen="/podcbd.png" page='https://wa.me/5620388381' precio='$1200'></PCatalogo>
        </div>
        </div>
        </div>
    </div>
  )
}
