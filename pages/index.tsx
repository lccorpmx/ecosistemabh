import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import BotonPersonalizado from '../components/BotonPersonalizado'
import Popup from "../components/popup"
import { supabase } from './../lib/supabaseClient';
import SlideShow from '../components/slideShow'

const inter = Inter({ subsets: ['latin'] })


export default function Index( {data}:{data:any}) {


  return (
    <div className='p-4 bg-black'>
      <Head>
        <title>BeeHigh</title>
        <meta name="description" content="BeeHigh" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className='bg-black relative max-w-md mx-auto'>
      <Popup data={data}></Popup>
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
