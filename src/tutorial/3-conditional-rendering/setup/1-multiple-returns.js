import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [user, setUser] = useState('default user');

// seting up the useEffect
useEffect(()=>{
  // fetching data asynchronously
    fetch(url)
    .then((resp)=>{
      if (resp.status >= 200 && resp.status <= 299) {
        // using the status of the response to handle the error
        return resp.json()
      } else {
        // when error is encountered, stop loading and set error to true
        // also throw a new error in such a case.
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText)      }
    }
      ) // we've successfully fetched the user data
    .then((user) => {
      // destructure the user object to get the data we need.
      const {login} = user;
      setUser(login);
      setIsLoading(false);
    }
      )
    .catch(error => console.log(error));
}, []);

// conditions to be checked for
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    <div>
        <h1>Error...</h1>
      </div>
  }

  return (
    <div>
        <h1>{user}</h1>
      </div>
    )
};

export default MultipleReturns;


// in the above code, we want to have diffrent return based on some conditions
// if loading is true, we want to have a return, and if loading is false we want to have another return.