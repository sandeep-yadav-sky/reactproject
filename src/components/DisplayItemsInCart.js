// import { useState } from 'react';
// import store from '../redux/store';
import { useSelector } from 'react-redux';

import {products} from "../data.js"

function DisplayItem(props)
{
    console.log(products);
    // let items = products;
    const item = products.filter((item) => item.name === props.item.name);
    console.log(item);
    return (<div className="cartItem">
    <div> {props.item.name} : {props.item.count}</div>
    </div>);
}
export default function DisplayItemsInCart(props)
{
    const cart = useSelector(state => state);
    console.log("cart is",cart);
    // const cart = products;
    return (<div class = "DisplayItemsInCart">{cart.map((item)=> <DisplayItem item = {item}/>)}</div>);
}