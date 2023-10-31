"use client"

import React from 'react'
import Header from '../components/headerPromos'
import Image from 'next/image' 
import abejaAmarilla from '../public/AbejaAmarilla.png'

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { toast } from "@/components/ui/use-toast"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
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

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  bio: "I own a computer.",
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" },
  ],
}

export default function resenas() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  })

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
                <Header></Header> 
        <div className='flex justify-center pt-8'>
            <Image src={abejaAmarilla} alt="Logo" width={80}/>
        </div>
        <div className='flex justify-center text-center'>
            <p className='text-4xl'>Cuentanos tu <br /><span className='text-yellow-400 text-6xl'>Experiencia</span></p>
        </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-10">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-xl text-yellow-500'>Nombre o IG</FormLabel>
              <FormControl>
                <Input placeholder="Tu Nombre..." {...field} />
              </FormControl>
              <FormDescription>
                Puedes omitir tu nombre y tu reseña sera anonima.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-yellow-500 text-xl'>Tu Experiencia</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuentanos un poco de tu experiencia..."
                  className="resize-none"
                />
              </FormControl>
              <FormDescription>
                Comparte tu experiencia <span className='text-yellow-400 text-xl'>BeeHigh</span> a todo el <span className='text-yellow-500 text-xl'>Crew</span>!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='bg-yellow-500'>Enviar Reseña</Button>
      </form>
    </Form>
  )
}
