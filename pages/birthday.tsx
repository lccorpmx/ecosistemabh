import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import BotonPersonalizado from '../components/BotonPersonalizado'
import Popup from "../components/popup"
import { supabase } from './../lib/supabaseClient';

const inter = Inter({ subsets: ['latin'] })

export default function Birthday({data}:{data:any}) {
  return (
    <div>
      <Popup imagen={data[0].imagecumple}></Popup>
    </div>
  )
}

export async function getServerSideProps() {
  let { data, error } = await supabase.from('cumpletable').select();

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
