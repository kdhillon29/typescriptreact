import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'

function App() {
   const [description,setDescription]=useState("default")
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
         welcome to react typescript!
        </p>
        <input onChange={(e)=>setDescription(e.target.value)} />
        <Counter description={description}/>
      </header>
    </div>
  );
}

export default App;
