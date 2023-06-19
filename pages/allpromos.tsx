import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Header from '../components/header'
import React, {useState} from 'react';
import SlideShow from '../components/slideShow'

export default function AllPromos() {
  return (
    <>
      <Header></Header>
      <div>
         <SlideShow></SlideShow>
        </div>
    </>
  )
}
