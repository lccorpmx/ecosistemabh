import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import BotonPersonalizado from '../components/BotonPersonalizado'

const inter = Inter({ subsets: ['latin'] })

export default function Bienvenida() {

  console.log("hola")
  return (
    <div className="bg-yellow-400 h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="rounded-xl border-4 border-white">
        <Image className='rounded-xl w-full'
          src="/prueba.jpg"
          alt="Mi imagen"
          width={200}
          height={200}
        />
      </div>

      <Link href="/home">
        <BotonPersonalizado texto="Continuar" colorF="bg-black" colorT='text-white'></BotonPersonalizado>
      </Link>
      
    </div>
  )
}
