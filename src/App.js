import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


// store and set the main data, star war characters will be retrieved from the axios request
const [characterList, setCharacterList] = useState(null);

// Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(()=>{
  axios
  .get('https://swapi.dev/api/people')
  .then (res => {
    console.log(res);
    setCharacterList(res.data)
  })
  .catch(err => {
    console.log(err)
  })
},[]) // setting this to empty because it will run on initial render.


  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters </h1>
      {!characterList ? <h2>Loading...</h2> : characterList.map((character, index) => <Character key={index} character={character}/>)}
    </div>
  );
}

export default App;

