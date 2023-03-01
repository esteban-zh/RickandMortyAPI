import React, {useState, useRef} from "react";
import "./style.scss";

const Box = () => {
  const [color, setColor] = useState("yellow");
  const [colorNew, setColorNew] = useState("red");
  const inputRef = useRef();
  const colorRef = useRef();

  const handleClick = () => {
      const color = inputRef.current.value;
      setColor(color);
    //   if (color === "blue") {
    //       setColor("red");
    //   } else {
    //       setColor("blue");
    //   }
  };

  const handleClickColor = () => {
      const color = colorRef.current.value;
      setColorNew(color);
  }

  return (
    <>
    <div className={`box ${color}`} onClick={handleClick}>
        <input ref={inputRef}/>
      div 1
    </div>

    <div className="box" 
    style = {{
        color:"gray",
        backgroundColor: colorNew,
    }} 
    onClick={handleClickColor}>
        <input ref={colorRef}/>
      div 2
    </div>

    </>
  );
};

export default Box;
