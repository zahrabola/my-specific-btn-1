

import React, { useState } from "react";
import "./App.css";
/*
Instructions:
  Can't remove the buttons when clicked , See if you can debug and fix 
*/

function Parent() {
  const [children, setChildren] = useState([3, 1, 2]);

  function removeChild(removedId) {
    setChildren(children.filter((id) => id !== removedId));
  }
  return (
    <div>
      <h2> Hi there.... </h2>
      {children.map((id) => (
        <Child key={id} id={id} remove={() => removeChild(id)} />
      ))}
    </div>
  );
}

function Child({ remove, id }) {
  return (
    <div>
      <button onClick={remove}>I'm the child {id}. Click to remove me!</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Parent />
    </div>
   
  );
}


export default App;
/*

the debugging part 
import React, { useState } from "react";
import "./styles.css";
/*
Instructions:
  Can't remove the buttons when clicked , See if you can debug and fix 


function Parent() {
  const [children, setChildren] = useState([3, 1, 2]);

  function removeChild(removedId) {
    setChildren(children.filter((id) => id !== removedId));
  }
  return (
    <div>
      <h2> Hi there.... </h2>
      {children.map((id) => (
        <Child key={id} id={id} remove={removeChild} />
      ))}
    </div>
  );
}

function Child({ remove, id }) {
  return (
    <div>
      <button onClick={remove}>I'm the child {id}. Click to remove me!</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}
*/