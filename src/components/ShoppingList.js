import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [selectedCategory, setSelectedCategory] = useState("All");

function handleFilterChange(event) {
  setSelectedCategory(event.target.value)
}

function getFilteredItems() {
  if (selectedCategory === "All") {
    return items;
  } else {
    return items.filter((item) => item.category === selectedCategory)
  }
}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {getFilteredItems().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
