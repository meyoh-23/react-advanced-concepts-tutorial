import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import {reducer} from './reducer';
//import { data } from '../../../data';

// reducer function
// has been restructured to a seperate file and then imported as shown above

// the default state object
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world'
}

const Index = () => {
  const [name, setName ]= useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if the name is suplied
    if (name) {
      const newItem = {id: new Date().getTime().toString(), name}
      dispatch({type:'ADD_ITEM', payload: newItem});
      setName('')
    } else {
      dispatch({type: 'NO_VALUE'});
    }
  };

  //closing the modal functionality
  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'});
  }

  return(
    <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type='submit'>add</button>
    </form>
    {state.people.map((person) => {
      return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button className='btn' onClick={() =>dispatch({type: 'REMOVE_ITEM',payload: person.id})}>remove item</button>
          </div>
        );
    })}
    </>
  )
};

export default Index;
