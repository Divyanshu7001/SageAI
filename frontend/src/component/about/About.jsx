import React from 'react'
import Heading from '../utility/Heading.jsx'

export default function About() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8'>
      <Heading text="About Us" />
      
      <p className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center mt-6'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem praesentium ut, 
        ipsam ipsum eos expedita, reiciendis odit suscipit accusantium sit laborum fuga debitis? 
        Molestias cupiditate cum optio ipsam aliquam!
      </p>
    </div>
  )
}