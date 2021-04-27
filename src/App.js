import './App.css';
import React, {useEffect, useState} from 'react'
import Recipe from './Recipe'

function App() {

  const APP_ID = `${process.env.REACT_APP_APP_ID}`
  const APPLICATION_KEY = `${process.env.REACT_APP_APPLICATION_KEY}`

  const [recipes, setRecipes] = useState([]); 

  useEffect(() => {
    getRecipes(); 
  }, []); 

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APPLICATION_KEY}`)
    const data = await response.json(); 
    setRecipes(data.hits)
  }

  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button className='search-button'type='submit'>Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe /> 
      ))}
    </div>
  );
}

export default App;
