import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import Box from './Box'

function App() {
  const count = useSelector(state => state.count);
  let bgColor = useSelector(state => state.color)
  const dispatch = useDispatch();
  let [number, setNumber] = React.useState(1)
  function handleChange(e) {

    if (isNaN(e.target.value)) {
      dispatch({ type: "ChangeColor", color: e.target.value })
    } else if (e.target.value == "") {
      setNumber(1)
    } else {
      setNumber(parseInt(e.target.value))
    }

  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <input type="text" onChange={e => handleChange(e)}></input>
      <button onClick={() => dispatch({ type: "INCREMENT", color: bgColor, payload: number })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT", color: bgColor, payload: number })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET", color: bgColor })}>Reset</button>
      <div className="boxes-wrapper">
        {

          Array(count).fill("").map(box => {
            return (
              <Box></Box>
            )
          })
        }
      </div>

    </div>

  );
}

export default App;
