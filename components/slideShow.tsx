import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import promo from '../public/prueba.jpg';
import Image from 'next/image';
import React from 'react';

const Slideshow = () => {
  // Array of Images
  const images = [
    "/promo1.jpg",
    "/promo2.jpg",
    "/promo3.jpg",
    "/promo4.jpg",
    "/promo5.jpg",
  ];

  // Custom properties for zoom effect while slide-show
  const zoomInProperties = {
    scale: 1,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className="ml-10 top-10 md:top-72 arrow-container">
        <div className="arrow"></div>
        <ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer arrow-icon" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-10 md:top-72 arrow-container">
        <div className="arrow"></div>
        <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer arrow-icon" />
      </div>
    ),
  };

  return (
    <div className="w-full h-screen">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center md:items-center items-start w-100 h-100 relative">
            <Image src={each} className="w-screen" height={1080} width={1080} alt="Logo" />
            <p className="absolute md:top-80 top-10 inset-x-1/4 text-center z-10 md:text-2xl text-xl bold text-white">TODAS LAS <span className='text-yellow-400'>PROMOS</span></p>
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
    </div>
  );
};

export default Slideshow;
