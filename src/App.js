import './App.css';
import React, {useEffect, useState} from 'react'
function App() {

  const APP_ID = `${process.env.REACT_APP_APP_ID}`
  const APPLICATION_KEY = `${process.env.REACT_APP_APPLICATION_KEY}`

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APPLICATION_KEY}`

  const [counter, setCounter] = useState(0); 

  useEffect(() => {
    console.log('effect has been run')
  }, []); 

  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text'/>
        <button className='search-button'type='submit'>Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
