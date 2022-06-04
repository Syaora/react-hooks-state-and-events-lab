import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ selectedCategory, setCategory ] = useState("All")

  const changeSelection = event =>{
    setCategory(selectedCategory => event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={changeSelection} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter((item) => item.category === selectedCategory || selectedCategory === "All").map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
