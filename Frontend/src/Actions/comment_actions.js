import * as API from '../Utils/api'
import * as Types from './actionTypes.js';

/**
 * Fetch comments for post
 * @param parentId
 * @returns {function(*)}
 */
export const fetchCommentForPost = (parentId) => {
  return (dispatch) => {
    API.fetchComment(parentId).then(comments => {
      dispatch({ type: Types.FETCH_COMMENTS, parentId, comments })
    })
  }
}

/**
 * Add comment to post
 * @param comment
 * @param parentId
 * @param callback
 * @returns {function(*)}
 */
export const createComment = (comment, parentId, callback) => {
  return (dispatch) => {
    API.addComment(comment).then(comment => {
      dispatch({ type: Types.ADD_COMMENT, parentId, comment })
    }).then(() => callback())
  }
}

/**
 * Deleting comment
 * @param commentId
 * @param callback
 * @returns {function(*)}
 */
export const deleteComment = (commentId, callback) => {
  return (dispatch) => {
    API.deleteComment(commentId).then(() => callback())
    dispatch({ type: Types.DELETE_COMMENT, commentId })
  }
}

/**
 * Liking comments
 * @param commentId
 * @param parentId
 * @param option
 * @returns {function(*)}
 */
export const voteComment = (commentId, parentId, option) => {
  return (dispatch) => {
    API.voteComment(commentId, option).then(updatedComment => {
      dispatch({ type: Types.VOTE_COMMENT, updatedComment, commentId, parentId })
    })
  }
}

/**
 * Updating comment
 * @param commentId
 * @param parentId
 * @param timestamp
 * @param body
 * @param callback
 * @returns {function(*)}
 */
export const updateComment = (commentId, parentId, timestamp, body, callback) => {
  return (dispatch) => {
    API.updateComment(commentId, timestamp, body)
    .then(updatedComment => {
      dispatch({ type: Types.UPDATE_COMMENT, updatedComment, commentId, parentId })
    }).then(() => callback())
  }
}
