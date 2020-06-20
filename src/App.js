import React, {useState} from 'react';
import './App.css';
import Teacher from './teacher.js';

function App() {
  let [count,setCount]=useState(0);
  let [isYellow,setYellow]=useState(false);
  return (
    <div>

      <h2>React App Class 3 and 4 with Nameera</h2>
     
      <div>
       <div className="divblock"><Teacher Tchname="Nameerah" subject="Computer" Zoomid="12345678" Zoompsd="asdfgh" /></div>
       <div className="divblock"><Teacher Tchname="Sana" subject="Science"  Zoomid="09876543" Zoompsd="qwerty" /></div>
       <div className="divblock"><Teacher Tchname="Saba" subject="Maths" Zoomid="45678990" Zoompsd="zxcvbn" /></div>
      </div>
      <div className={`box ${isYellow ? 'yellow' : 'pink' }`}>
  
      <h2> Counter Value = {count}</h2>
      <p><button onClick={()=>setCount(count+1)} className={"btn"}>Add</button>      
      &nbsp;&nbsp;&nbsp;
      <button onClick={()=>setCount(count-1)} className={"btn"}>Subtract</button></p>
   
      <h2>Box Colour = {isYellow ? 'Yellow Colour':'Pink Colour'}</h2>
      <button onClick={()=>setYellow(true)} className={"yellow"}>  Yellow  </button>
      &nbsp;&nbsp;
      <button onClick={()=>setYellow(false)} className={"pink"}> Pink  </button>
      </div>
    </div>
  );
}

export default App;
