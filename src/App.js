import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
      Hello From React App from Nameera I am goung to create Covid 19 App
      <Dinner dishname="Salad and" sweet="Kheer"/>
      <hr/>
      <Dinner dishname="Cold drink and" sweet="custured"/>
      <hr/>
      <Dinner dishname="Raita and" sweet="fruitchart"/>

    </div>
  );
}

export default App;
