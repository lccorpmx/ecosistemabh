import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import BotonPersonalizado from '../components/BotonPersonalizado'
import Popup from "../components/popup"

const inter = Inter({ subsets: ['latin'] })

export default function Birthday() {

  return (
    <div>
      <Popup imagen="/cumple.jpg"></Popup>
    </div>
  )
}
