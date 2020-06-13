import React, {useState} from 'react';
import './App.css';
import Teacher from './teacher.js';

function App() {
  let [count,setCount]=useState(0);
  let [isYellow,setYellow]=useState(false);
  return (
    <div className={`box ${isYellow ? 'yellow' : 'pink' }`} >
      <h2>Hello  React App from Nameera <br />Class 4</h2>
      <Teacher Tchname="Nameerah" subject="Computer" Zoomid="12345678" Zoompsd="asdfgh" />
      <hr/>
      <Teacher Tchname="Sana" subject="Science"  Zoomid="09876543" Zoompsd="qwerty" />
      <hr/>
      <Teacher Tchname="Saba" subject="Maths" Zoomid="45678990" Zoompsd="zxcvbn" />
      
      <h3> Counter Value = {count}</h3>
      <p><button onClick={()=>setCount(count+1)} className={"btn"}>Add</button>      
      &nbsp;&nbsp;&nbsp;
      <button onClick={()=>setCount(count-1)} className={"btn"}>Subtract</button></p>
   
      <h2>Box Colour = {isYellow ? 'Yellow Colour':'Pink Colour'}</h2>
      <button onClick={()=>setYellow(true)} className={"yellow"}>  Yellow  </button>
      &nbsp;&nbsp;
      <button onClick={()=>setYellow(false)} className={"pink"}> Pink  </button>
    </div>
  );
}

export default App;
