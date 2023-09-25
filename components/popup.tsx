import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import promo from '../public/prueba.jpg';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import BotonPersonalizado from '../components/BotonPersonalizado';

interface AvisosData {
  linkimage: string;
}


const popup = ( { data }: { data: AvisosData[] }) => {

  // Custom properties for zoom effect while slide-show
  const zoomInProperties = {
    scale: 1,
    duration: 5000000000000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-10 top-5  arrow-container">
        <div className="arrow"></div>
        <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer arrow-icon" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-5  arrow-container">
        <div className="arrow"></div>
        <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer arrow-icon" />
      </div>
    ),
  };

  return (
    <div className="w-full h-screen">
      <Zoom {...zoomInProperties}>
        {data.map((each, index) => (
          <div key={index} className="flex justify-center md:items-center items-start w-100 h-100 relative bg-black p-6">
            <Image src={each.linkimage} className="w-full pt-16" height={1080} width={1080} alt="Logo" />
            <p className="absolute  top-5 inset-x-1/4 text-center z-10 md:text-2xl text-md bold text-white">AVISOS   <span className='text-yellow-400'>BEE HIGH</span></p>
          </div>
          
        ))}
      </Zoom>
      <style jsx global>{`
        .arrow-container {
          position: relative;
          width: 50px;
          height: 50px;
        }

        .arrow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Color y opacidad del fondo desenfocado */
          border-radius: 50%;
          filter: blur(10px); /* Ajusta el valor del desenfoque según tus preferencias */
          z-index: -1; /* Coloca el fondo desenfocado detrás de la flecha */
        }

        .arrow-icon {
          position: relative;
          z-index: 1; /* Coloca la flecha por encima del fondo desenfocado */
        }
      `}</style>
      <div className="flex justify-center">
      <Link href="/home" className="pt-4">
        <BotonPersonalizado
          texto="Continuar"
          colorF="bg-yellow-400"
          colorT="text-black"
        />
      </Link>
      </div>
    </div>
  );
};


export default popup;