"use client"

import React, { useEffect, useState } from 'react'
import Header from '../components/headerPromos'
import Image from 'next/image' 
import abejaAmarilla from '../public/AbejaAmarilla.png'
import { supabase } from './../lib/supabaseClient';
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BsPatchCheckFill } from 'react-icons/bs';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"
import { PostgrestSingleResponse, SupabaseClient } from '@supabase/supabase-js'


import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(22, {
      message: "Username must not be longer than 22 characters.",
    }),

  description: z.string().max(160).min(4)
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  name: "@",
  description: ""
}

export default function Resenas({data}:{data:any}) {
  const [loading, setLoading] = useState(false)
  const [resenas, setResenas] = useState<PostgrestSingleResponse<any[]>>()
 // console.log(resenas)
  // useEffect(() =>{
  //   async function getResenas(){
  //     const resena = await supabase.from("resenas").select()
  //     setResenas(resena)
  //   }
  //   getResenas()
  // })
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  // const { fields, append } = useFieldArray({
  //   control:  form.control,
  // })

  async function onSubmit(data: ProfileFormValues) {
    // console.log(data)
    // setResenas(resena)
    // console.log(resena)
    // console.log(data.description)

    setLoading(true)
    const newResena = await supabase.from("resenas").insert({ 
      name: data.name,
      description: data.description
    })
    
    if (newResena){
      console.log("Ingresado")
    }else{
      console.log("No Ingresado")
    }
    setLoading(false)
  }

  const handleReloadPage = () => {
    window.location.reload();
  }

  return (
    <div className='bg-black min-h-screen'>
          <Form {...form}>
      <Header></Header> 
      <div className='flex justify-center pt-6'>
        <Image src={abejaAmarilla} alt="Logo" width={60}/>
      </div>
      <div className='flex justify-center text-center'>
        <p className='text-2xl'>Cuentanos tu <br /><span className='text-yellow-400 text-4  xl'>Experiencia</span></p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-14">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg text-yellow-500'>Nombre o IG</FormLabel>
              <FormControl>
                <Input placeholder="Tu Nombre..." {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-yellow-500 text-lg'>Tu Experiencia</FormLabel>
              <FormControl>
                <Input
                  placeholder="Cuentanos un poco de tu experiencia..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription className='text-lg'>
                Comparte tu experiencia <span className='text-yellow-400 text-xl'>BeeHigh</span> a todo el <span className='text-yellow-500 text-xl'>Crew</span>!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" onClick={handleReloadPage} className='bg-yellow-500 disabled:bg-yellow-500/80' disabled={loading}>Enviar Reseña</Button>
      </form>
    </Form>

    <div>

    </div>
    <p className='text-white p-12 text-2xl'>El Crew <span className='text-yellow-400'>BeeHigh</span></p>
    <div className='p-8 grid grid-cols-2 gap-6'>
    {data.map((each, index) => (
        <div className='w-full'>
        <Alert className='bg-white rounded-2xl'>
              <div className='flex items-center'>
              <p className='text-blue-400'> <BsPatchCheckFill className="h-4 w-4 black" /></p>
  <AlertTitle className='text-black text-sm'>{each.name}</AlertTitle>
              </div>
  <AlertDescription className='text-black text-sm'>
    {each.description}
  </AlertDescription>
</Alert> 
      </div>
    ))}
            </div>

    </div>
  )
}


export async function getServerSideProps() {
  let { data, error } = await supabase.from('resenas').select();
  if (error) {
    console.error(error);
  }

  return {
    props: {
      data
    },
  };
}