import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import BotonPersonalizado from '../components/BotonPersonalizado'
import Popup from "../components/popup"
import { supabase } from './../lib/supabaseClient';
import SlideShow from '../components/slideShow'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const inter = Inter({ subsets: ['latin'] })


export default function Index( {data}:{data:any}) {


  return (
    <div className='p-4 bg-black'>
      <Head>
        <title>BeeHigh</title>
        <meta name="description" content="BeeHigh" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className='bg-black relative max-w-md mx-auto p-12'>
        <div className='flex justify-center pb-2'>
          <Link href="/home">
          <span className='text-yellow-400 text-xl'><span className='text-white'>Ir a </span>Inicio</span>
          </Link>
        </div>
      <Carousel>
  <CarouselContent>
    {data && data.map((imagen:any, index:number) =>
        <CarouselItem key={index}><Image src={imagen.linkimage} className="w-full" height={1080} width={1080} alt="Logo" /></CarouselItem>
    )}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let { data, error } = await supabase.from('popuptable').select();
  if (error) {
    console.error(error);
  }

  return {
    props: {
      data
    },
  };
}
