import React from 'react'
import Heading from '../utility/Heading.jsx'
import TestimonialCard from '../utility/TestimonialCard.jsx'

export default function Testimonials() {
  return (
    <section className='bg-zinc-50 min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-12 gap-10'>
      <div className='w-full lg:w-1/2 max-w-2xl'>
        <Heading text="What Customers Say" size="text-3xl sm:text-4xl text-zinc-900 text-center lg:text-left mb-4"/>
        <p className='text-zinc-700 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum accusantium, dicta iure, ab hic sequi vitae dolorum odit, minus doloribus ipsam aperiam. Provident magni voluptates ratione tempora, commodi eos.</p>
      </div>
      <div className='w-full lg:w-1/2 max-w-2xl overflow-x-hidden grid gap-5 h-auto lg:h-52 pb-1'>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
      </div>
    </section>
  )
}