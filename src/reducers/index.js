/*
  Reducers
*/
import { SEND } from '../constants/actionTypes'

const initialState = {
  type: 'SEND'
}

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case SEND:
      return {
        value: action.value
      }
 
    default:
      return state
  }
}
