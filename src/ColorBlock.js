import React from "react";

function ColorBlock(props) {
  return (
    <div className="colorBlock" style={{ backgroundColor: props.color }}>
      <p>{props.color}</p>
    </div>
  );
}

//dont forget to export components
export default ColorBlock;
