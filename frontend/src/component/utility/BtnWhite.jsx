import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BtnWhite(props) {
  const navigate = useNavigate()
  return (
    <button onClick={()=>{props.endpoint!==undefined?navigate(props.endpoint):""}} type={props.type===undefined?'button':'submit'} className="inline-block px-4 py-2  border border-zinc-500 hover:bg-white hover:text-zinc-700 rounded-md w-fit">{props.text}</button>
        
  )
}
