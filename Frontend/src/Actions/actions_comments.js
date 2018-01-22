import _ from 'lodash'
import axios from 'axios'
import {
  FETCH_POST_COMMENTS,
  FETCH_POST_COMMENTS_COUNT,
  FETCH_COMMENT_POST,
  CREATE_COMMENT_POST,
  EDIT_COMMENT_POST,
  DELETE_COMMENT_POST,
  VOTE_COMMENT,
} from './types'
import {
  URL,
  HEADER,
  guid,
} from './constants'

axios.defaults.headers.common['Authorization'] = HEADER

/*
Actions for comments
*/

export function fetchPostComments (postId) {
  return dispatch => {
    axios.get(`${URL}/posts/${postId}/comments`).then(response => {
      dispatch({type: FETCH_POST_COMMENTS, payload: response.data})
    })
  }
}

export function fetchPostCommentsCount (postId, callback) {
  return dispatch => {
    axios.get(`${URL}/posts/${postId}/comments`).then(res => {
      const comments = _.filter(res.data, comment => !comment.deleted)
      const count = Object.keys(comments).length
      const data = {postId, count}
      callback(data)
      dispatch({type: FETCH_POST_COMMENTS_COUNT, payload: data})
    })
  }
}

export function fetchCommentPost (id) {
  return dispatch => {
    axios.get(`${URL}/comments/${id}`).
      then(response => dispatch(
        {type: FETCH_COMMENT_POST, payload: response.data}))

  }
}

export function createPostComment (values, parentId, callback) {
  const {body, author} = values

  const data = {
    id: guid(),
    parentId,
    timestamp: Date.now(),
    body,
    author,
  }

  return dispatch => {
    axios.post(`${URL}/comments`, data).then(response => {
      callback()
      dispatch({type: CREATE_COMMENT_POST, payload: response.data})
    })

  }
}

export function editPostComment (id, values, callback) {

  return dispatch => {
    axios.put(`${URL}/comments/${id}`, values).then(response => {
      callback()
      dispatch({type: EDIT_COMMENT_POST, payload: response.data})
    })

  }
}

export function deleteCommentPost (id, callback) {
  return dispatch => {
    axios.delete(`${URL}/comments/${id}`).then(response => {
      callback()
      dispatch({type: DELETE_COMMENT_POST, payload: response.data})
    })
  }
}

export function voteForComment (id, vote) {
  return dispatch => {
    axios.post(`${URL}/comments/${id}`, {option: vote}).
      then(response => dispatch({type: VOTE_COMMENT, payload: response.data})).
      catch(err => console.log(err))

  }
}