import React from 'react'
import PCatalogo from '../components/productCatalogo'
import Header from '../components/header'


export default function pCarts() {
  return (
    <div className="pb-4">
        <div>
        <Header></Header>
        <div className='p-2'>
        <p className="text-center z-10 text-2xl bold text-white pt-4">LÍNEA   <span className='text-yellow-400'>DIAMANTE</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Diamond Cart 1.1G' imagen="/ung.png" page='https://wa.me/5620388381' precio='$1500'></PCatalogo>
        </div>

        <p className="text-center z-10 text-2xl bold text-white pt-4">LÍNEA   <span className='text-yellow-400'>98%</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Cart 98% 1.1G' imagen="/otrog.png" page='https://wa.me/5620388381' precio='$1200'></PCatalogo>
        <PCatalogo producto='Cart 98% 0.5G' imagen="/mediog.png" page='https://wa.me/5620388381' precio='$750'></PCatalogo>
        </div>


        <p className="text-center z-10 text-2xl bold text-white pt-4">LÍNEA   <span className='text-yellow-400'>92%</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Cart 92% 1.0G' imagen="/ung.png" page='https://wa.me/5620388381' precio='$1000'></PCatalogo>
        </div>


        <p className="text-center z-10 text-2xl bold text-white pt-4">LÍNEA   <span className='text-yellow-400'>85%</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Cart 85% 1.1G' imagen="/mediog.png" page='https://wa.me/5620388381' precio='$850'></PCatalogo>
        <PCatalogo producto='Cart 85% 0.5G' imagen="/mediog.png" page='https://wa.me/5620388381' precio='$650'></PCatalogo>
        </div>


        <p className="text-center z-10 text-2xl bold text-white pt-4">LÍNEA   <span className='text-yellow-400'>Full Spectrum</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Cart FullSpectrum 1.1G' imagen="/otrog.png" page='https://wa.me/5620388381' precio='$1200'></PCatalogo>
        </div>


        <p className="text-center z-10 text-2xl bold text-white pt-4">LÍNEA   <span className='text-yellow-400'>CBD</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Cart CBD 1.1G' imagen="/ung.png" page='https://wa.me/5620388381' precio='$1200'></PCatalogo>
        </div>
        </div>
        </div>
    </div>
  )
}
