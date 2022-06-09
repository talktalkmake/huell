import React, { useState } from "react";
import './index.css';

import { SketchPicker as Huell } from "react-color";

function App() {
  const [hue, setHue] = useState(["#0075ff"]);
  const [collection, setCollection] = useState(hue);

  return (
    <div className="flex">
      <div className="h">
        <h3 className="text-3xl font-bold underline">Huell</h3>
      </div>
      <div className="h">
        <div className="hold-hue">
          <Huell
            color={hue}
            direction="vertical"
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
  );
}

export default App;
