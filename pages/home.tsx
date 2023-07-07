import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Header from '../components/header'
import BotonPersonalizado from '../components/BotonPersonalizado'
import abejaAmarilla from '../public/AbejaAmarilla.png'
import promo from '../public/promo1.jpg'
import promoUno from '../public/promo2.jpg'
import promoDos from '../public/promo3.jpg'
import PCatalogo from '../components/productsCatalogo'
import { supabase } from './../lib/supabaseClient';





export default function Home( {data}:{data:any}) {
    return (
     <>
        <Header></Header>


        <div className='flex flex-col items-center justify-center mt-8'>
            <Image src={abejaAmarilla} alt="Logo" width={180}/>
            <h1 className='text-6xl'>BEE <span className='text-yellow-400'>HIGH</span></h1>
            <div className="w-2/6 h-2 border border-white rounded-full mt-2 mb-2"></div>
            <p className='text-center text-2xl'>SI ES LA SEMANA<br/>DE TU<br/>CUMPLEAÑOS</p>
            <Link href="/birthday" className='pt-4'>
            <BotonPersonalizado texto="Haz clic aquí" colorF="bg-yellow-400" colorT='text-black'></BotonPersonalizado>
             </Link>
            
        </div>

        <div className='bg-white mt-8 p-2 flex flex-col items-center justify-center'>
            <div className='pb-4 pt-4'><h2 className='text-center text-black text-6xl'>PROMOS<span className='text-yellow-400'><br />BEE HIGH</span></h2></div>
            <div className='grid grid-cols-3 gap-2 m-2'>
               <div className='flex flex-col items-center'>
                  <Image src={data[0].relevantpromo} width={1920} height={1080} alt='promo' className='rounded-xl pb-2'></Image>
                  <Link href="/allpromos">
                     <BotonPersonalizado texto='PROMOS' colorF='bg-yellow-400' colorT='text-black'></BotonPersonalizado>
                  </Link>
               </div>

               <div className='flex flex-col items-center'>
                  <Image src={data[1].relevantpromo} width={1920} height={1080} alt='promo' className='rounded-xl pb-2'></Image>
                  <Link href="/combos">
                     <BotonPersonalizado texto='COMBOS' colorF='bg-yellow-400' colorT='text-black'></BotonPersonalizado>
                  </Link>
               </div>

               <div className='flex flex-col items-center'>
                  <Image src={data[2].relevantpromo} width={1920} height={1080} alt='promo' className='rounded-xl pb-2'></Image>
                  <Link href="/sistemabonificaciones">
                     <BotonPersonalizado texto='VER MÁS' colorF='bg-yellow-400' colorT='text-black'></BotonPersonalizado>
                  </Link>
               </div>
            </div>
            <div className='pb-6 grid grid-cols-3 gap-2 m-2'>
            </div>

            <div className='bg-black w-full pt-6 rounded-2xl'>
               <p className='text-center text-yellow-400 text-5xl'>CATÁLOGO</p>
               <div className='grid grid-cols-2 gap-4 m-4'>
               <PCatalogo producto='Carts' imagen="/c1.png" page='/pCarts'></PCatalogo>
               <PCatalogo producto='Pods' imagen="/c4.png" page='/pPods'></PCatalogo>
               <PCatalogo producto='Baterías' imagen="/bats.png" page='/pBaterias'></PCatalogo>
               <PCatalogo producto='Prerolls' imagen="/c2.png" page='/pPrerolls'></PCatalogo>
               <PCatalogo producto='Dulcería' imagen="/c3.png" page='/pDulceria'></PCatalogo>
               <PCatalogo producto='Flor' imagen="/flor.png" page='/pFlor'></PCatalogo>
               <PCatalogo producto='Goteros' imagen="/gotero.png" page='/pGoteros'></PCatalogo>
               <PCatalogo producto='Pomadas' imagen="/pomadaabuela.png" page='/pPomadas'></PCatalogo>
               </div>

            </div>
        </div>
     </>
    )
  }

  export async function getServerSideProps() {
   let { data, error } = await supabase.from('relevationpromosdb').select();
 
   console.log(data); // Verificar los datos devueltos en la consola
 
   if (error) {
     console.error(error);
   }
 
   return {
     props: {
       data
     },
   };
 }
 
  