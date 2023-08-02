import React, { useState } from 'react';

const UseStateObject = () => {
  // passing the object directly to the function
  const [person, setPerson] = useState(
    {
      name: 'Peter',
      age: 24,
      message: 'Hey Peter!'
    }
    );

  // change message function 
  const changeMessage = () => {
    setPerson({...person, message: 'Welcome on board bro'});
  }

  return (<>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage} >change message</button>
  </>
  );
};

export default UseStateObject;
