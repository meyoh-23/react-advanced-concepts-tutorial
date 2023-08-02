import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  // set up the useSate
  const [size, setSize] = useState(window.innerWidth);

  // check the size of the window everytime
  const checkSize = () => {
    setSize(window.innerWidth);
  };

// setup the useEffect
useEffect(() => {
  console.log('useEffect');
  window.addEventListener('resize',checkSize);
  // cleanup function
  return () => {
    console.log('cleanup');
    window.removeEventListener('resize', checkSize);
  }
}, []);

  console.log(size);
  console.log('render');
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  )
};

export default UseEffectCleanup;
