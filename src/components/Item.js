import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setAdded] = useState(false)
  const cName = isAdded ? "in-cart" : ""
  
  function handleClick(){
    setAdded((isAdded) => !isAdded)
  }

  return (
    <li className={cName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} 
        className={isAdded ? "add" : "remove"}>
          {isAdded ? "Remove From" : "Add"} Cart
      </button>
    </li>
  );
}

export default Item;
