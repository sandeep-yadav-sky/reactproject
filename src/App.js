// import logo from './÷logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

import { ADD_TO_CART, REMOVE_FROM_CART } from './redux/constants';

import products from "./data.json"

store.subscribe(()=>{
  let cart = store.getState();
  console.log("store Changed",cart);
});



function DisplayCount(props) 
{
    return (<div class="CountContainer">
    <button onClick={()=> {
      props.removeFromCart(props.price);
      props.decreaseCount();
      store.dispatch({
        type:REMOVE_FROM_CART,
        payload:{
          name:props.productName,
        }
      })
     }}> - </button>
    <div> {props.itemCount} </div>
    <button onClick={()=> {props.addToCart(props.price); 
      props.increaseCount()
      store.dispatch({
        type:ADD_TO_CART,
        payload:{
          name:props.productName,
        }
      })
      }}> + </button>
      </div>);
}

function AddToCart(props){
  
  const [ClickedCount, setState] = useState(0);

  const increaseCount = ()=>{
    setState(ClickedCount +1);
  }
  const decreaseCount = () => {
    setState(ClickedCount - 1);
  }
    const ClickCount = ClickedCount;
    if(ClickCount===0){
    return (<div class = "AddToCart">
      <button onClick= {()=> {
        props.addToCart(props.price);
      increaseCount();
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
      return <DisplayCount productName = {props.productName} price = {props.price} itemCount = {ClickedCount}  addToCart = {props.addToCart} removeFromCart = {props.removeFromCart} increaseCount = {increaseCount} decreaseCount = {decreaseCount}/>;
    }
}


function TotalPrice(props)
{
  const {totalPrice} = props;
  return (
    <div class = "totalPriceContainer">
    <div class= "totalPriceHeader">
      Total Price:
    </div>
    <div class = "totalPrice"> {totalPrice} </div>
    </div>
  )
}


class  DisplayProduct extends React.Component {
  render() {
    return (
      <div class='Product'>
      <div class="Product-price"> Rs {this.props.price}</div>
      <div class = "Image-container">
      <img src = {this.props.img} alt = "product"/>
      </div>
      <div class="Product-info">
      <div class="Product-name"> {this.props.name}</div>
      <div class="Product-desccription"> {this.props.description}</div>
      </div>
      <AddToCart productName = {this.props.name} price = {this.props.price} addToCart = {this.props.addToCart} removeFromCart = {this.props.removeFromCart}/>
      </div>
    );
  }
}


class ProductList extends React.Component 
{

  render() { 
    return (<div class = "productContainer">
    { products.map((product) => <DisplayProduct key = {product.name} {...product} addToCart = {this.props.addToCart} removeFromCart = {this.props.removeFromCart}/>)}
    </div>);
  }
  
}


function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(store);
  const addToCart = (price)=>{
    setTotalPrice(totalPrice + price);
  }
  const removeFromCart = (price)=>{
    setTotalPrice(totalPrice-price);
  }

  return (
    <Provider store={store}>
    <div className="App">
    <ProductList addToCart = {addToCart} removeFromCart = {removeFromCart}/>
    <TotalPrice totalPrice={totalPrice}/>
    </div>
    </Provider>
  );
}

export default App;
