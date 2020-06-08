import {ADD_TO_CART} from './types'

export const addToCart = (pizza) => {
  console.log(pizza)
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: pizza
    });
  }
}