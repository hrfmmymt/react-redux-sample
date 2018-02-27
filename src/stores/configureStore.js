/*
  Stores
*/

import { createStore } from 'redux'
import formReducer from '../reducers'

const configureStore = () => {
  const store = createStore(
    formReducer
  )

  return store
}

export default configureStore
