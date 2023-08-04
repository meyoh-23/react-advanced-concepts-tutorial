import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
        const person  = {id: new Date().getTime().toString(), firstName, email};
        //console.log(person);
        // add the person to an array
        setPeople((people) => {
          return [...people, person];
        });
      //set firstName ane email back to an empty srting
    setFirstName('');
    setEmail('');
    } else {
      console.log('empty values ');
    }
  }

  return (
  <>
  <article>
    {/* // to handle the input, we can add onSubmit listner to the form or onClick to the form submit btn */}
    <form className='form' onSubmit={handleSubmit} >
      <div className='form-control' >
        <label htmlFor='firstName' >Name : </label>
        <input
        type='tex'
        id='firstName'
        name='firstName'
        value={firstName} 
        onChange={(e)=>setFirstName(e.target.value)}/>
      </div>

      <div className='form-control' >
        <label htmlFor='email' >Email: </label>
        <input
        type='tex'
        id='email'
        name='email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}/>
      </div>

      <button type='submit'>add person</button>
    </form>
    {
      people.map((person) => {
        const {id, firstName, email} = person;

        return (
          <div className='item'key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })
    }
  </article>
  </>
  );
};

export default ControlledInputs;
