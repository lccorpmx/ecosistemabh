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


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Header from '@/components/header';






export default function Index( {data}:{data:any}) {


  return (
    <div className='bg-yellow-400 p-4'>
      <Head>
        <title>BeeHigh</title>
        <meta name="description" content="BeeHigh" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className=''>
      <Popup data={data}></Popup>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let { data, error } = await supabase.from('allpromostable').select();
  if (error) {
    console.error(error);
  }

  return {
    props: {
      data
    },
  };
}
