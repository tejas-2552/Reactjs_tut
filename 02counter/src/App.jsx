import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setCounter] = useState(15);
  let[userName,setUserName] = useState("UserName");
 

  const setName= () =>{
    userName = counter;
    setUserName(userName);
  }
  const addValue = () =>{
    if(counter >= 20){
      alert("Value should be less than 20.")
      return;
    }
    counter = counter + 1;
    setCounter(counter);
    console.log("Value added : ",counter);
  }

  const removeValue = function (){
    if(counter < 1){
      alert("Value should be greter than 0.")
      return;
    }
    counter = counter - 1;
    setCounter(counter);
    console.log("Value removed : ",counter);
  }

  return (
    <>
      <h1>Hello world | {userName} </h1>
      <h2>Counter Value : {counter}</h2>
      <input type='text'></input>
      <button onClick={setName}>change username</button>
      <br/>
      <button onClick={addValue}>Add Value</button>
      <br>
      </br>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
