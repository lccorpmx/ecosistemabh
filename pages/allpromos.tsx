import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Header from '../components/header'
import React, {useState} from 'react';
import Carrusel from '../components/carrusel'

export default function AllPromos() {

  const slides=[
    "/prueba.jpg",
    "/prueba.jpg",
  ]

  return (
    <>
      <Header></Header>
      <main className='App'>
        <div className="max-w-lg">
          <Carrusel>
            {slides.map((s) => (
              <img src={s} />
            ))}
          </Carrusel>
        </div>
      </main>
    </>
  )
}
