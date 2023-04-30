import React, { useState } from "react";

function Item({ name, category }) {

const [isInCart, setIsInCart] = useState(false)

function addToCart(){
  setIsInCart(!isInCart)
}

const inCart = isInCart ? "in-cart" : "";
const itemText = isInCart ? "Remove From Cart" : "Add To Cart";

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{itemText}</button>
    </li>
  );
}

export default Item;
