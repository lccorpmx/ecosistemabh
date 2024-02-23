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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function allpromos({data}:{data:any}) {
  return (
    <div>
      <Header></Header>
      <div className='bg-black min-h-screen relative max-w-md mx-auto pl-14 pr-14 pt-8'>
        <div className='flex justify-center pb-2'>
          <Link href="/home">
          <span className='text-yellow-400 text-xl'><span className='text-white'>Promos</span> BeeHigh</span>
          </Link>
        </div>
      <Carousel>
      <CarouselContent>
        {data && data.map((imagen: any, index:number) =>
            <CarouselItem key={index}><Image src={imagen.urlimage} className="w-full" height={1080} width={1080} alt="Logo" /></CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>

      <div className="bg-green-800 rounded-full mt-2 w-12">
            <Link href="https://wa.me/5620388381">
              <div className="flex justify-center items-center p-2">
                <div>
                <Image
                  className='rounded-full'
                  src={'/wa.png'}
                  alt='Mi imagen'
                  width={30}
                  height={30}
                />
                </div>
              </div>
            </Link>
            </div>
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
