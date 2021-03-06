import {ADD_TO_CART} from '../actions/types'

const initialState = []

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_TO_CART: 
      return[
        ...state,
        action.payload 
      ]
    default : return state
  }
}