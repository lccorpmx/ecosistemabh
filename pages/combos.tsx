import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Header from '../components/headerPromos'
import React, {useState} from 'react';
import SlideShow from '../components/slideShow'
import { supabase } from './../lib/supabaseClient';
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';


export default function Combos({data}:{data:any}) {
  return (
    <div>
        <Header></Header>
        <div className='relative max-w-md mx-auto'>
          <SlideShow data={data} title='Kits' title2='BeeHigh'></SlideShow>
        </div>
    </div>
  )
}


export async function getServerSideProps() {
  let { data, error } = await supabase.from('combostable').select();
  if (error) {
    console.error(error);
  }

  return {
    props: {
      data
    },
  };
}
