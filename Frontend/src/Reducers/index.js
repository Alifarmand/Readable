import { combineReducers } from 'redux'
import CatReducer from './cat_reducer'

const allReducers = combineReducers({
  categories: CatReducer
})

export default allReducers
