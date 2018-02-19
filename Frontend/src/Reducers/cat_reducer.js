import { FETCH_CAT } from '../Actions/categories'

const INITIAL_STATE = {}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CAT:
      return action.payload.categories
    default:
      return state
  }
}