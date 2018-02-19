import { ROOT_URL, AUTH_HEADERS } from './constants'
import axios from 'axios'

//Obligatory from Udacity
axios.defaults.headers.common['Authorization'] = AUTH_HEADERS

/**
 * Actions
 * @type {string}
 */
export const FETCH_CAT = 'fetch_categories'
export const FETCH_CAT_POSTS = 'fetch_category_posts'

function fetchCat (data) {
  return {
    type: FETCH_CAT,
    payload: data,
  }
}

export function fetchCategories () {
  return dispatch => {
    axios.get(`${ROOT_URL}/categories`)
      .then(res => dispatch(fetchCat(res.data)))
      .catch(error => console.log(error))
  }
}

export function festchCatPosts (category) {
  return dispatch => {
    axios.get(`${ROOT_URL}/${category}/posts`)
      .then(res => dispatch({type: FETCH_CAT_POSTS, payload: res.data}))
      .catch(error => console.log(error))
  }
}