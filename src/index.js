import React, { useState, useEffect, useLayoutEffect } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

// Functional component
const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
};

const App = () => {
  useConstructor(() => {
    console.log("Occurs ONCE, BEFORE the initial render.");
  });
  const [counter, setCounter] = useState(0);
  const [constructorHasRun, setConstructorHasRun] = useState(false);

  useEffect(() => {
    console.log("Occurs ONCE, but it occurs AFTER the initial render.");
  }, []);

  useLayoutEffect(() => {
    console.log("Occurs ONCE, but it still occurs AFTER the initial render.");
  }, []);

  const constructor = () => {
    if (constructorHasRun) return;
    console.log("Inline constructor()");
    setConstructorHasRun(true);
  };

  constructor();
  console.log("Occurs EVERY time the component is invoked.");
  return (
    <>
      <div>Counter: {counter}</div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </>
  );
};

render(<App messages={data.messages} />, document.getElementById("root"));
