import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import BotonPersonalizado from '../components/BotonPersonalizado';

const inter = Inter({ subsets: ['latin'] });

interface PopUpProps {
  imagen: string;
}

export default function PopUp({ imagen }: PopUpProps) {
  return (
    <div className="bg-yellow-400 h-screen flex flex-col justify-center items-center">
      <Head>
        <title>BeeHigh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="rounded-xl border-4 border-white p">
        <Image
          className="rounded-xl w-full"
          src={imagen}
          alt="Mi imagen"
          width={200}
          height={200}
        />
      </div>

      <Link href="/home" className="pt-4">
        <BotonPersonalizado
          texto="Continuar"
          colorF="bg-black"
          colorT="text-white"
        />
      </Link>
    </div>
  );
}
