import * as API from '../Utils/api'
import * as Types from './actionTypes.js';

/**
 * Gets all posts
 * @returns {function(*)}
 */
export const fetchAllPosts = () => {
  return (dispatch) => {
    API.fetchPosts().then(posts => {
      dispatch({ type: Types.FETCH_POSTS, posts })
    })
  }
}

/**
 * New post
 * @param post
 * @param callback
 * @returns {function(*)}
 */
export const createPost = (post, callback) => {
  return (dispatch) => {
    API.addPost(post).then(() => callback())
    dispatch({ type: Types.ADD_POST, post })
  }
}

/**
 * Updating psots
 * @param postId
 * @param title
 * @param body
 * @param callback
 * @returns {function(*)}
 */
export const updatePost = (postId, title, body, callback) => {
  return (dispatch) => {
    API.updatePost(postId, title, body).then(updatedPost => {
      dispatch({ type: Types.UPDATE_POST, updatedPost, postId })
    })
    .then(() => callback())
  }
}

/**
 * Deleting
 * @param postId
 * @param callback
 * @returns {function(*)}
 */
export const deletePost = (postId) => {
  return dispatch => {
    API.deletePost(postId).then(() => {
      dispatch({ type: Types.DELETE_POST, postId })
    })
  }
}

/**
 * Voting
 * @param postId
 * @param option
 * @returns {function(*)}
 */
export const votePost = (postId, option) => {
  return (dispatch) => {
    API.votePost(postId, option).then(() => {
      dispatch({ type: Types.VOTE_POST, postId, option })
    })
  }
}

/**
 * Sorting
 * @param sortKey
 * @returns {function(*)}
 */
export const sortPost = (sortKey) => {
  return dispatch => {
    dispatch({ type: Types.SORT_POST, sortKey })
  }
}
