import '../App.css'
import React from 'react';
import store from '../redux/store';
import { useSelector } from 'react-redux';

import { ADD_TO_CART} from '../redux/constants';
// import {products} from "../data"

import DisplayCount from './DisplayCount';

export default function AddToCart(props)
{
    const cart = useSelector(state => state);
    const index = cart.findIndex((product)=> product.name === props.productName);
    const ClickCount = (index === -1)?0:cart[index].count;
    if(ClickCount===0){
    return (<div class = "AddToCart">
      <button onClick= {()=> {
      store.dispatch({
        type:ADD_TO_CART,
        payload:{
          name:props.productName,
        }
      })}}> Add To Cart </button>
    </div>);
    }
    else
    {
      return <DisplayCount productName = {props.productName} price = {props.price} itemCount = {ClickCount}/>;
    }
}


