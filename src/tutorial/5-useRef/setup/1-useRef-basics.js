import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  // initializing the useRef
  const refContaner = useRef(null);
  const divContaner = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContaner.current.value);
    console.log(divContaner.current);
  }

  // useEffect to focus pointer to the useRefContainer
  useEffect(() => {
    console.log(refContaner.current);
    refContaner.current.focus();
  });

  return (
  <>
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input type='text' ref={refContaner}></input>
        <button type='submit'>submit</button>
      </div>
      <div ref={divContaner}>hello World from the Div container</div>
    </form>
    
  </>
  );
};

export default UseRefBasics;
