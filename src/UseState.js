import './App.css';
import React,{useState} from 'react';

function Count(){

  const [count , setCount] =useState(0)

  function decrementCount(){
setCount(count - 1)
  }

  function incrementCount(){
    setCount(count + 1)
  }
  return(
    <div className='App'>
  <button onClick={decrementCount} >-</button>
  <span>{count}</span>
  <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default Count;