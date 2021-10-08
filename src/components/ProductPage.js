import React from 'react';

import TotalPrice from "./TotalPrice";
 
import ProductList from "./ProductList";
import { products } from '../data';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
export default class ProductPage extends React.Component
{
  render(){return(
    <div className="App">
    <DndProvider backend= {HTML5Backend}>
    <ProductList products = {products}/>
    </DndProvider>
    <TotalPrice products ={products}/>
  </div>
  )};
}