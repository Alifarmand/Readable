import * as Types from '../Actions/actionTypes'

/**
 * Categories reducer
 * @type {Array}
 */
const INITIAL_STATE = []
function categories(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.FETCH_CATEGORY:
      return action.res.categories
    default:
      return state
  }
}

export default categories
