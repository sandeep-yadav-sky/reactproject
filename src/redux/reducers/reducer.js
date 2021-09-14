
import { ADD_TO_CART } from "../constants";
import * as products from "../../data.json"
const initialState = {
    cart:[{
        name:'Adaptor',
        count:0
    }]
}


export default function reducer(state = initialState, action)
{
    console.log(action);
    switch (action.type) {
        case ADD_TO_CART:
            if(state.cart.length === 0)
            {
                console.log([...state.cart,{name:action.payload.name, count:1}]);
                return [...state.cart,{name:action.payload.name, count:1}];
            }
            else
            {
            // console.log([...state.cart,{name:action.payload.name, count:state.cart.count+1}]);
            
            let newCart = [...state.cart];
            console.log(newCart,action.payload.name);
            newCart[newCart.find(cartItem => cartItem.name === action.payload.name)].count+=1;

            return newCart;
            }
        default:
            break;
    }
}
