import React from 'react'
import PCatalogo from '../components/productCatalogo'
import Header from '../components/header'


export default function pDulceria() {
  return (
    <div className="pb-4">
        <div>
        <Header></Header>
        <div>
        <p className="text-center z-10 text-2xl bold text-white pt-4"><span className='text-yellow-400'>CANDYLANDIA</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
            <PCatalogo producto='Aros de Manzana' imagen="/arosmanzana.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Aros de Durazno' imagen="/arosdurazno.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Gusanos' imagen="/gusanos.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Cubos Tuttifrutti' imagen="/cubos.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Mango Enchilado' imagen="/mangos.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Pinamitas' imagen="/pinamita.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Fruta Enchilada' imagen="/frutaenchilada.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Pina Enchilada' imagen="/pinamita.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Sour Panditas' imagen="/sourpanditas.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Sour Patch' imagen="/sourpatch.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Enjambre Enchilado' imagen="/arosmanzana.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Tiras de Sandia' imagen="/tirasdesandia.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
        </div>

        <p className="text-center z-10 text-2xl bold text-white pt-4"><span className='text-yellow-400'>CAMPECHANITOS</span></p>
        <div className='grid grid-cols-2 gap-8 m-8'>
            <PCatalogo producto='Enchilados' imagen="/arosmanzana.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
            <PCatalogo producto='Dulces' imagen="/arosdurazno.png" page='https://wa.me/5620388381' precio='$300'></PCatalogo>
        </div>
        </div>
        </div>
    </div>
  )
}
