import React, { useState } from 'react';

// reqular counter example
const UseStateCounter = () => {
    const [value, setValue] = useState(0);

// implementing the reset Functionality
/* const reset = () => {
    setValue(0)
}; */

const complexIncrease = () => {
    setTimeout(() => {
        //setValue(value + 1);
        setValue((prevState) => {
            return prevState + 1;
        })
    }, 2000)
}

    return (
    <>
        <section style={{margin: '4rem 0'}}>
            <h2>Complex Counter</h2>
            <h1>{value}</h1>
            <button className='btn' onClick={complexIncrease} >
                increase later
            </button>
        </section>
    </>
    );
};

export default UseStateCounter;
