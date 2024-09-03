import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation(props) {
  return (
    
    <TypeAnimation
      sequence={[props.text]}
      className={props.className}
      wrapper={props.wrapper}
      speed={props.speed}
      repeat={0}
      initiallyVisible ="true"
      cursor="false"
    /> 
  );

}
