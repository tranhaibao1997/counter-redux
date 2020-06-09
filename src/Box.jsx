import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Box() {
    let textColor="white"
  const color = useSelector((state) => state.color);
  const count = useSelector(state => state.count);
  let [boxBg, setBoxBg] = React.useState(null);
  console.log("color", color);
  console.log(boxBg)
  if(count>10)
  {
textColor="black"
  }
  const dispatch = useDispatch();
  return (
    <>
      {boxBg  ?(
        <div className="box" style={{ backgroundColor: `${boxBg}`,color:`${textColor}` }}>
          <input type="text" onChange={e=> setBoxBg(e.target.value)}></input>
          Colorful Box
        </div>
      ) : (
        <div className="box" style={{ backgroundColor: `${color}`,color:`${textColor}` }}>
          <input type="text" onChange={e=> setBoxBg(e.target.value)}></input>
          Colorful Box
        </div>
      )}
    </>
  );
}
