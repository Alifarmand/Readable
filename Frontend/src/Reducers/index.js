import { combineReducers } from 'redux'
import CatReducer from './cat_reducer'
import PostsReducer from './post_reducer'
import CommentsReducer from './comment_reducer'

//Combining reducers as one to pass it to Redux state
const allReducers = combineReducers({
  categories: CatReducer,
  posts: PostsReducer,
  comments: CommentsReducer,
})

export default allReducers
