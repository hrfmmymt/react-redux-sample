/*
  Action Creators
*/

import * as types from '../constants/actionTypes'

export const send = value => {
  console.log('SEND')
  // Action
  return {
    type: types.SEND,
    value,
  }
}
