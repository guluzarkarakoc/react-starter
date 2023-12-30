import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART} from '../actions/cartActions'

const initialState = {
  cartItems:[]
}

export const cartReducer =(state=initialState, action)=> {
switch (action.type) {
    case ADD_TO_CART:
        return {...state, cartItems:[...state.cartItems,action.payload]}
    
    case REMOVE_FROM_CART:
       return {...state,cartItems:state.cartItems.filter(i=>i.id !== action.payload.id)}

    case CLEAR_CART:
        return initialState;
    default:
        return state;}
}
export default cartReducer;