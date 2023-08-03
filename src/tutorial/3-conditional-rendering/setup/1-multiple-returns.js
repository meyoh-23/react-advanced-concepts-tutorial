import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <h2> Loading...</h2>
  }
  return <h2>multiple returns</h2>;
};

export default MultipleReturns;


// in the above code, we want to have diffrent return based on some conditions
// if loading is true, we want to have a return, and if loading is false we want to have another return.