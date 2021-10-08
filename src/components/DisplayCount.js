
import store from "../redux/store";
import {ADD_TO_CART,REMOVE_FROM_CART} from "../redux/constants"
export default function DisplayCount(props) 
{
    return (<div className="CountContainer">
    <button onClick={()=> {
      store.dispatch({
        type:REMOVE_FROM_CART,
        payload:{
          name:props.productName,
        }
      })
     }}> - </button>
    <div> {props.itemCount} </div>
    <button onClick={()=> {
      store.dispatch({
        type:ADD_TO_CART,
        payload:{
          name:props.productName,
        }
      })
      }}> + </button>
      </div>);
}