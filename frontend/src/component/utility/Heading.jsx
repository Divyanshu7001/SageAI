import React, { useEffect, useState } from 'react'

export default function Heading(props) {
    const [size, setSize]=useState("")
    useEffect(()=>{

        setSize(props.size===undefined?"text-5xl" :props.size)
    },[props])
  return (
    <h1 className={`text-center ${size} `}>
      {props.text}
    </h1>
  )
}
