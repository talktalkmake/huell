import React, { useState } from "react";
import "./App.css";

import { HuePicker as Huell } from "react-color";

function App() {
  const [hue, setHue] = useState(["#0075ff"]);
  const [collection, setCollection] = useState(hue);

  return (
    <React.Fragment>
      <div className="g">
        <div className="h">
          <h3 className="App">Huell</h3>
        </div>
        <div className="h">
          <div className="hold-hue">
            <Huell
              color={hue}
              direction="vertical"
              width="2rem"
              height="15rem"
              onChangeComplete={color => setHue(color.hex)}
            />
          </div>
          <div className="huell" style={{ backgroundColor: hue }}>
            <p>{hue}</p>
          </div>
          <button
            className="add-color"
            onClick={color => setCollection([...collection, hue])}
          >
            Add Color
          </button>
          <hr />
          {collection.map(e => (
            <div style={{ backgroundColor: e }}>{e}</div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
