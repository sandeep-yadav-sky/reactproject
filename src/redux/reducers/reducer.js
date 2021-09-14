
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";
// import * as products from "../../data.json"

const initialState = []



export default function reducer(state = initialState, action)
{
    console.log(action);
    switch (action.type) {
        case ADD_TO_CART:
            let newCart = [...state];
            let z = (newCart.findIndex(cartItem => cartItem.name === action.payload.name));
            if(z===-1)
                newCart = [...newCart,{name:action.payload.name,count:1}];
            else
                newCart[z].count+=1;
            console.log(newCart);
            return newCart;
        case REMOVE_FROM_CART:
            let dupCart = [...state];
            let index = (dupCart.findIndex(cartItem => cartItem.name === action.payload.name));

            dupCart[index].count--;
            if(dupCart[index].count === 0)
            {
                dupCart = dupCart.filter(item => item.name!==action.payload.name)
            }
            console.log(dupCart);
            return dupCart;
        default:
            return state;
    }
}
