import React, { useState } from "react";
import "./App.css";

import { HuePicker as Huell } from "react-color";

function App() {
  const [color, setColor] = useState("ff0 17%");

  return (
    <React.Fragment>
      <h3 className="App">Huell</h3>
      <p>What is Huell and what does it do?</p>
      <ol>
        <li>User registration</li>
        <li>User login</li>
        <li>User logout</li>
        <li>User deletion</li>
        <li>Pick colors</li>
        <li>Add them to collections</li>
        <li>{color}</li>
      </ol>
      <div className="hue-hold">
        <Huell
          direction="vertical"
          width="16px"
          height="200px"
          onChangeComplete={() => setColor(color)}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
