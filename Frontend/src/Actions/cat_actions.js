import * as API from '../Utils/api'
import * as Types from './actionTypes.js';

/**
 * Get categories
 * @returns {function(*)}
 */
export const fetchCategories = () => {
  return (dispatch) => {
    API.fetchCategories().then(res => {
      dispatch({ type: Types.FETCH_CATEGORY, res })
    })
  }
}

/**
 * Get categories related posts
 * @param category
 * @returns {function(*)}
 */
export const fetchPostsByCategory = (category) => {
  return (dispatch) => {
    API.fetchPostsByCategory(category).then(posts => {
      dispatch({ type: Types.GET_CATEGORY_POSTS, posts })
    })
  }
}