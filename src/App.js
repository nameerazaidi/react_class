import React from 'react';
import './App.css';
import Teacher from './teacher.js';

function App() {
  return (
    <div className="App">
      Hello From React App from Nameera I am goung to create Covid 19 App
      <Teacher Tchname="Nameerah" subject="Computer" Zoomid="12345678" Zoompsd="asdfgh" />
      <hr/>
      <Teacher Tchname="Sehrish" subject="Science"  Zoomid="09876543" Zoompsd="qwerty" />
      <hr/>
      <Teacher Tchname="Naila" subject="Maths" Zoomid="45678990" Zoompsd="zxcvbn" />

    </div>
  );
}

export default App;
