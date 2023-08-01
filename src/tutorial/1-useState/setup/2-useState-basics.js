import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value);
  const [text, setText] = useState('random title');

  // handle click event on the button
  const handleClick = () => {
    if (text === 'random title') {
      setText('Hello People');
  } else {
    setText('random title');
  }
};
    

  return(
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick} >
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
