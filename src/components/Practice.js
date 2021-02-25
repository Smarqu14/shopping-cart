import React, { useState, useEffect, useRef } from 'react';

/*
useState()  


It is the most important and often used hook. The purpose of this hook to handle reactive data, any data that changes in the application is called state, when any of the data changes, React re-renders the UI.

*/

const Practice = () => {
  const [name, setName] = useState('');
  const [isClicked, setisClicked] = useState(false);
  const [count, setCount] = useState(0);
  const myBtn = React.useRef(null);

  // this will run when the component mounts and anytime the stateful data changes
  // Everytime that my app changes state i run this console.log
  // useEffect(() => {
  //   console.log('Data changes');
  // });

  // // this will run, when the component is first initialized
  // // when the component mounts to screen it triggers this use effect
  // useEffect(() => {
  //   console.log('ComponentDidMount using useEffect');
  // }, []);

  // // this will run only when count state changes
  // useEffect(() => {
  //   fetch('nads').then(() => setisClicked(true));
  // }, [count]);

  // // this will run when the component is destroyed or before the component is removed from UI.
  // React.useEffect(() => {
  //   console.log('Hey, Nads here');
  //   return () => console.log('Goodbye Component');
  // });

  const handleBtn = () => myBtn.current.click();

  return (
    <div>
      <h1>Hello world</h1>
      <input type='text' onChange={(event) => setName(event.target.value)} />
      <button
        onClick={() => {
          setCount(count + 1);
          setisClicked(!isClicked);
        }}
      >
        Add name
      </button>
      <p>
        My name is {isClicked ? name : '[Enter name in textbox]'}, nice to meet
        you
      </p>
      <button ref={myBtn} onChange={handleBtn}>
        Click here
      </button>
    </div>
  );
};

export default Practice;
