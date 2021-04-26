import './App.css';
import React, {useEffect, useState} from 'react'
function App() {

  const APP_ID = `${process.env.REACT_APP_APP_ID}`
  const APPLICATION_KEY = `${process.env.REACT_APP_APPLICATION_KEY}`


  useEffect(() => {

  }, []); 

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APPLICATION_KEY}`)
    const data = await response.json(); 
    console.log(data); 
  }

  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button className='search-button'type='submit'>Search</button>
      </form>
    </div>
  );
}

export default App;
