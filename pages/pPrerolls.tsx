import React from 'react'
import PCatalogo from '../components/productCatalogo'
import Header from '../components/header'


export default function pPrerolls() {
  return (
    <div className="pb-4">
        <div>
        <Header></Header>
        <div>
        <p className="text-center z-10 text-2xl bold text-white pt-4"><span className='text-yellow-400'>PREROLL</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Preroll 2G' imagen="/productoPreroll.png" page='https://wa.me/5620388381' precio='$500'></PCatalogo>
        </div>

        <p className="text-center z-10 text-2xl bold text-white pt-4"><span className='text-yellow-400'>MEGATOKE</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
        <PCatalogo producto='Megatoke 4G' imagen="/productoMegatoke.png" page='https://wa.me/5620388381' precio='$950'></PCatalogo>
        </div>
        </div>
        </div>
    </div>
  )
}
