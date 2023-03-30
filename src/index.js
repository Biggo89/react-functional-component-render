import React, { useState, useEffect, useLayoutEffect } from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

// Functional component
const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  console.log("constructor body " + hasBeenCalled);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
};
const Child = () => {
  console.log("child body");
  useEffect(() => {
    console.log("Child useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("Child useLayoutEffect");
  }, []);
  return <h3>Figlio</h3>;
};

const App = () => {
  useConstructor(() => {
    console.log("padre constructor");
  });
  //const [counter, setCounter] = useState(0);
  // const [constructorHasRun, setConstructorHasRun] = useState(false);

  useEffect(() => {
    console.log(" PADRE useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("PADRE uselayouteffect");
  }, []);

  // const constructor = () => {
  //   if (constructorHasRun) return;
  //   console.log("Inline constructor()");
  //   setConstructorHasRun(true);
  // };

  // constructor();
  console.log("PADRE body");
  return (
    <>
      {/* <div>Counter: {counter}</div>
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div> */}
      <Child></Child>
    </>
  );
};

render(<App messages={data.messages} />, document.getElementById("root"));
