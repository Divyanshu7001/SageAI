import React from 'react'
import Heading from '../utility/Heading'
import TestimonialCard from '../utility/TestimonialCard'

export default function Testimonials() {
  return (
    <section className='h-screen grid grid-cols-2 items-center justify-between px-20 gap-10 relative overflow-hidden place-items-center' >
      <div className='gap-5 grid'>
        <Heading text="What Customers Say" size="text-4xl  text-start"/>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum accusantium, dicta iure, ab hic sequi vitae dolorum odit, minus doloribus ipsam aperiam. Provident magni voluptates ratione tempora, commodi eos.</p>
      </div>
      <div className='overflow-x-hidden grid gap-5 h-52 pb-1 px-4'>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
      </div>
    </section>
  )
}
