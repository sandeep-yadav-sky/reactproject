import React, { useState,useCallback } from "react";
import DisplayProduct from "./DisplayProducts";
import { useDrop } from "react-dnd";
import { itemTypes } from "../constants";
import { products as productsData } from "../data";
import update from 'immutability-helper'

// import { DragSource, DropTarget, } from 'react-dnd';

export default function ProductList(props) {
  const [products, setProducts] = useState([...productsData]);
  
  const swapProducts = (curIndex,hoverIndex) =>{
    console.log("swapping products",curIndex,hoverIndex);
    const reorderedProducts = [...products];
    [reorderedProducts[curIndex], reorderedProducts[hoverIndex]] = [reorderedProducts[hoverIndex], reorderedProducts[curIndex]]
    setProducts(reorderedProducts);
    console.log(products);
  }

//   const moveProducts = useCallback((dragIndex, hoverIndex) => {
//     const dragProduct = products[dragIndex];
//     setProducts(update(products, {
//         $splice: [
//             [dragIndex, 1],
//             [hoverIndex, 0, dragProduct],
//         ],
//     }));
// }, [products]);

  return (
    <div className="productContainer">
      {products.map((product, i) => (
        <DisplayProduct
          key={product.name}
          index={i}
          {...product}
          swapProducts = {swapProducts}
        />
      ))}
    </div>
  );
}
