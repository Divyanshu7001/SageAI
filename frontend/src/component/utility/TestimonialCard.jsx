import React from 'react'

export default function TestimonialCard(params) {
  return (
    <div ref={params.ref} className=' p-7 rounded-md shadow-md border-[.5px] grid items-center gap-5  '>
        <h1 className='text-3xl content-center text-white'><span className='text-xl p-3 border rounded-full mr-5'>TH</span>The Hello</h1>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure, adipisci eos quam libero voluptatibus neque ex ad vitae iusto? Quos exercitationem ut quia dolorum? Omnis corrupti consequuntur porro suscipit?</p>
      
    </div>
  )
}
