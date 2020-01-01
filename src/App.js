import React, { useState } from "react";
import "./App.css";

import { HuePicker as Huell } from "react-color";

function App() {
  const [hue, setHue] = useState("#0075ff");

  return (
    <React.Fragment>
      <div className="g">
        <div className="h">
          <h3 className="App">Huell</h3>
          <p>What is Huell and what does it do?</p>
          <ol>
            <li>User registration</li>
            <li>User login</li>
            <li>User logout</li>
            <li>User deletion</li>
            <li>Pick colors</li>
            <li>Add them to collections</li>
            <li>{hue}</li>
          </ol>
        </div>
        <div className="h">
          <div className="hue-hold">
            <Huell
              color={hue}
              direction="vertical"
              width="16px"
              height="200px"
              onChangeComplete={color => setHue(color.hex)}
            />
          </div>
          <div className="huell" style={{ backgroundColor: hue }}>
            <p>{hue}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
