import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Header from '../components/header'
import BotonPersonalizado from '../components/BotonPersonalizado'
import abejaAmarilla from '../public/abejainicio.png'
import cumple from '../public/cumple2.jpeg'
import { supabase } from './../lib/supabaseClient';
import { AiFillYoutube, AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';
import { TbBrandTelegram } from 'react-icons/tb';

import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
 } from "@/components/ui/dialog"

 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion"

export default function Home( {data}:{data:any}) {
    return (
     <>
     <Head>
        <title>BeeHigh</title>
        <meta name="description" content="BeeHigh" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

        <Header></Header>


        <div className='flex flex-col items-center justify-center pt-6 pb-6 bg-black'>
            <Image src={abejaAmarilla} alt="Logo" width={180}/>
            <h1 className='text-6xl text-white'>BEE <span className='text-yellow-400'>HIGH</span></h1>
            <div className="w-2/6 h-2 border border-white rounded-full mt-2 mb-2"></div>
            <p className='text-center text-xl p-2 text-white'>SI ES LA<br/>SEMANA DE <br/>TU CUMPLEAÑOS</p>
            <Dialog>
               <DialogTrigger className='bg-yellow-400 rounded-2xl p-2 text-black'>Click Aqui</DialogTrigger>
               <DialogContent className='bg-yellow-400 text-black'>
                  <div className='flex justify-center p-2'>
                     <Image src={cumple} alt="Logo" width={1200} className='rounded-xl'/>
                  </div>
               </DialogContent>
            </Dialog>
        </div>

        <div className='bg-white p-2 flex flex-col items-center justify-center'>
            <div className='pb-4 pt-4'><h2 className='text-center text-black text-6xl'>PROMOS<span className='text-yellow-400'><br />BEE HIGH</span></h2></div>
            <div className='grid grid-cols-3 gap-2 m-2'>
               <div className='flex flex-col items-center'>
                  <Image src={data[0].relevantpromo} width={1920} height={1080} alt='promo' className='rounded-xl pb-2'></Image>
                  <Link href="/allpromos">
                     <BotonPersonalizado texto='Promos' colorF='bg-yellow-400' colorT='text-black'></BotonPersonalizado>
                  </Link>
               </div>

               <div className='flex flex-col items-center'>
                  <Image src={data[1].relevantpromo} width={1920} height={1080} alt='promo' className='rounded-xl pb-2'></Image>
                  <Link href="/combos">
                     <BotonPersonalizado texto='Kits' colorF='bg-yellow-400' colorT='text-black'></BotonPersonalizado>
                  </Link>
               </div>

               <div className='flex flex-col items-center'>
                  <Image src={data[2].relevantpromo} width={1920} height={1080} alt='promo' className='rounded-xl pb-2'></Image>
                  <Link href="/sistemabonificaciones">
                     <BotonPersonalizado texto='Bonificaciones' colorF='bg-yellow-400' colorT='text-black'></BotonPersonalizado>
                  </Link>
               </div>
            </div>
        </div>

        <div className='p-6 bg-black'>
        <div className='pb-4 pt-4'><h2 className='text-center text-white text-6xl'>ROLAS by<span className='text-yellow-400 underline'><br /> <Link rel="stylesheet" href="https://www.instagram.com/mrbeemex/">MR.BEE</Link></span></h2></div>
         <div>
            <Accordion type="single" collapsible>
               <AccordionItem value="item-1">
                  <AccordionTrigger className='text-yellow-400'>RKT Más Envidia Que Fe</AccordionTrigger>
                  <AccordionContent>
                  <iframe className="border-radius:12px" src="https://open.spotify.com/embed/track/3qxivFEbnuAhpvzSDc7M9r?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         </div>

         <div>
            <Accordion type="single" collapsible>
               <AccordionItem value="item-1">
                  <AccordionTrigger className='text-yellow-400'>Perro Cochino</AccordionTrigger>
                  <AccordionContent>
                  <iframe className="border-radius:12px" src="https://open.spotify.com/embed/track/65kqSKKOm5UrYhdpNQvu7Y?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         </div>

         <div>
            <Accordion type="single" collapsible>
               <AccordionItem value="item-1">
                  <AccordionTrigger className='text-yellow-400'>Ya Date Un Fuuu</AccordionTrigger>
                  <AccordionContent>
                  <iframe className="border-radius:12px" src="https://open.spotify.com/embed/track/4M1epwPH6INIiEGosyeACt?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         </div>
        </div>

        <div className='bg-white pb-6'>
        <div className='pb-4 pt-4'><h2 className='text-center text-white text-6xl text-yellow-400'>CONTACTO</h2></div>
        <div className='grid grid-cols-2 items-center gap-4'>

        <Link href="https://wa.me/message/FOZGCK245UB7O1">
         <div className='flex flex-col items-center'>
            
            <AiOutlineWhatsApp className='text-green-600 text-4xl'></AiOutlineWhatsApp>
            <div className="w-2/6  border border-black rounded-full mt-2 mb-2"></div>
            <p className='text-yellow-400 text-lg'>WhatsApp Foraneos</p>
   
         </div>
         </Link>

         <Link href="https://wa.me/5532399649">
         <div className='flex flex-col items-center'>
            
            <AiOutlineWhatsApp className='text-green-600 text-4xl'></AiOutlineWhatsApp>
            <div className="w-2/6  border border-black rounded-full mt-2 mb-2"></div>
            <p className='text-yellow-400 text-lg'>WhatsApp CDMX</p>
   
         </div>
         </Link>

         <Link href="https://t.me/+1aDac5AqdShiYTlh">
         <div className='flex flex-col items-center'>
            
            <TbBrandTelegram className='text-blue-500 text-4xl'></TbBrandTelegram>
            <div className="w-2/6  border border-black rounded-full mt-2 mb-2"></div>
            <p className='text-yellow-400 text-lg'>Telegram</p>
   
         </div>
         </Link>

         <Link href="https://www.instagram.com/beehigh_mexico/">
         <div className='flex flex-col items-center'>
            
            <AiOutlineInstagram className='text-pink-600 text-4xl'></AiOutlineInstagram>
            <div className="w-2/6  border border-black rounded-full mt-2 mb-2"></div>
            <p className='text-yellow-400 text-lg'>BeeHigh</p>
   
         </div>
         </Link>

        </div>
        </div>



        <div className='bg-black pb-6'>
        <div className='pb-4 pt-4'><h2 className='text-center text-white text-6xl'>BEE<span className='text-yellow-400'>TUBE</span></h2></div>
            
        <div className='bg-white p-2 m-2 rounded-xl m-6'>
               <div className='flex justify-between items-center gap-2'>
                  <div>
                     <AiFillYoutube className='text-6xl text-red-600'></AiFillYoutube>
                  </div>
                  <div>
                     <Link href="https://www.youtube.com/watch?v=nB_PTt9_EfE" className='text-lg text-black'>Perro Cochino Mr.Bee x Mr.Pimp Dog</Link>
                  </div>
               </div>
            </div>

            <div className='bg-red-600 p-2 m-2 rounded-xl m-6'>
               <div className='flex justify-between items-center'>
                  <div>
                     <AiFillYoutube className='text-6xl'></AiFillYoutube>
                  </div>
                  <div>
                     <Link href="https://www.youtube.com/watch?v=LCJYxUc95Ik" className='text-lg'>Mr.Pimp x Mr.Bee -  Ya date un fuuu</Link>
                  </div>
               </div>
            </div>

            <div className='bg-white p-2 m-2 rounded-xl m-6'>
               <div className='flex justify-between items-center gap-2'>
                  <div>
                     <AiFillYoutube className='text-6xl text-red-600'></AiFillYoutube>
                  </div>
                  <div>
                     <Link href="https://www.youtube.com/watch?v=hJxE3SCsc78" className='text-lg text-black'>EPISODIO ESPECIAL 420 RICARDO PEREZ x Bee High Mx</Link>
                  </div>
               </div>
            </div>

            <div className='bg-red-600 p-2 m-2 rounded-xl m-6'>
               <div className='flex justify-between items-center gap-2'>
                  <div>
                     <AiFillYoutube className='text-6xl'></AiFillYoutube>
                  </div>
                  <div>
                     <Link href="https://www.youtube.com/watch?v=B37AzUCWkvk" className='text-lg'>Podcast Zona420MX x Mr.Bee</Link>
                  </div>
               </div>
            </div>
        </div>


        
     </>
    )
  }

  export async function getServerSideProps() {
   let { data, error } = await supabase.from('relevationpromosdb').select();
 
   //console.log(data); // Verificar los datos devueltos en la consola
 
   if (error) {
     console.error(error);
   }
 
   return {
     props: {
       data
     },
   };
 }

 
