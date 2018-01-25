import {
  POSTS_GET,
  POST_REMOVE,
  POST_EDIT,
  ADD_POST
} from '../Actions/post_actions'

const initialState = {
  posts: [],
  sortBy: {}
}

export function postReducer (state = initialState, action) {
  switch (action.type) {
    case POST_REMOVE:
      return state.posts.filter
      obj => obj.id !== action.id
    default:
      return state
  }
}

