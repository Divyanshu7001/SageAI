import React from 'react';
import Wave from 'react-wavify';
const WavingBackground = () => (
    
  <Wave
  fill="url(#gradient)"
  paused={false}
  style={{ display: 'flex' }}
  options={{
    height: 90,
    amplitude: 10,
    speed: 0.30,
    points: 10,
  }}
>
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="0%" stopColor="red" />
      <stop offset="100%" stopColor="orange" />
    </linearGradient>
  </defs>
</Wave>

  
);

export default WavingBackground;
