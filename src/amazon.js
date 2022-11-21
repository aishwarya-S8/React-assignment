import React, { useState } from "react";
import list from "../data";
import Products from "./card";
import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((product) => (
        <Products key={product.id} product={product} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;