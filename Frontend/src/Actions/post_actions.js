export const POSTS_GET = 'POSTS_GET'
export const POST_REMOVE = 'POST_REMOVE'
export const POST_EDIT = 'POST_EDIT'
export const ADD_POST = 'ADD_POST'

export function getPosts() {
  return {
    type: POSTS_GET,
  }
}

export function editPost (id) {
  return {
    type: POST_EDIT,
    id
  }
}
export function removePost (id) {
  return {
    type: POST_REMOVE,
    id
  }
}