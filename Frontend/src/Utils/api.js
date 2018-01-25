import uuid from 'uuid';

export class Api {
  /**
   * auth token required by api
   * @type {string | null}
   */
  token = null;
  /**
   * default headers for api
   * @type {object | null}
   */
  headers = null;
  /**
   * base url for api
   * @type {string | null}
   */
  url = null;

  /**
   * GET /categories
   * @return {Promise<any>}
   */
  getAllCategories = () => {
    return fetch(`${this.url}/categories`, { headers: this.headers })
    .then(response => response.json())
    .then(data => data.categories);
  };

  /**
   * GET /:category/posts
   * @param category
   * @return {Promise<any>}
   */
  getAllPostsForCategory = category =>
    fetch(`${this.url}/${category}/posts`, { headers: this.headers })
    .then(response => response.json())
    .then(data => data);

  /**
   * GET /posts
   * @return {Promise<any>}
   */
  getAllPosts = () =>
    fetch(`${this.url}/posts`, { headers: this.headers }).then(response =>
      response.json()
    );

  /**
   * POST /posts
   * @param {object} post
   * @param {string} post.id UUID - should be fine, but any unique id will work
   * @param {number} post.timestamp - timestamp in whatever format you like, you can use Date.now() if you like
   * @param {string} post.title -
   * @param {string} post.body -
   * @param {string} post.author -
   * @param {string} post.category - Any of the categories listed in api-server/categories.js. Feel free to extend this list as you desire.
   * @return {Promise<any>}
   */
  createPost = post => {
    post.id = uuid();
    post.timestamp = Date.now();
    return fetch(`${this.url}/posts`, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(data => data.json());
  };

  /**
   * PUT /posts/:id
   * @param id
   * @param {object} post
   * @param {string} post.id UUID - should be fine, but any unique id will work
   * @param {number} post.timestamp - timestamp in whatever format you like, you can use Date.now() if you like
   * @param {string} post.title -
   * @param {string} post.body -
   * @param {string} post.author -
   * @param {string} post.category - Any of the categories listed in api-server/categories.js. Feel free to extend this list as you desire.
   * @return {Promise<any>}
   */
  editPost = (id, post) =>
    fetch(`${this.url}/posts/${id}`, {
      method: 'PUT',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(data => data.json());

  /**
   * GET /posts/:id
   * @param id
   * @return {Promise<any>}
   */
  getPost = id =>
    fetch(`${this.url}/posts/${id}`, { headers: this.headers }).then(response =>
      response.json()
    );

  /**
   * POST /posts/:id
   * @param id
   * @param {string} option possible values "upVote" or "downVote"
   * @return {Promise<any>}
   */
  votePost = (id, option) =>
    fetch(`${this.url}/posts/${id}`, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        option: option
      })
    }).then(data => data.json());

  /**
   * DELETE /posts/:id
   * @param id
   * @return {Promise<Response>}
   */
  deletePost = id =>
    fetch(`${this.url}/posts/${id}`, {
      method: 'DELETE',
      headers: this.headers
    });

  /**
   * GET /posts/:id/comments
   * @param id
   * @return {Promise<any>}
   */
  getComments = id =>
    fetch(`${this.url}/posts/${id}/comments`, { headers: this.headers }).then(
      response => response.json()
    );

  /**
   * POST /comments
   * @param {object} comment
   * @param {string} comment.id - Any unique ID. As with posts, UUID is probably the best here.
   * @param {number} comment.timestamp - Get this however you want.
   * @param {string} comment.body - String
   * @param {string} comment.author - String
   * @param {string} comment.parentId - Should match a post id in the database.
   * @return {Promise<any>}
   */
  addComment = comment => {
    comment.id = uuid();
    comment.timestamp = Date.now();
    return fetch(`${this.url}/comments`, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    }).then(data => data.json());
  };

  /**
   * DELETE /comments/:id
   * @param id
   * @return {Promise<any>}
   */
  deleteComment = id =>
    fetch(`${this.url}/comments/${id}`, {
      method: 'DELETE',
      headers: this.headers
    }).then(data => data.json());

  /**
   * PUT /comments/:id
   * @param id
   * @param {object} comment
   * @param {string} comment.body - String
   * @return {Promise<any>}
   */
  editComment = (id, comment) => {
    comment.timestamp = Date.now();
    return fetch(`${this.url}/comments/${id}`, {
      method: 'PUT',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    }).then(data => data.json());
  };

  /**
   * POST /comments/:id
   * @param id
   * @param {string} option possible values "upVote" or "downVote"
   * @return {Promise<any>}
   */
  voteComment = (id, option) =>
    fetch(`${this.url}/comments/${id}`, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        option: option
      })
    }).then(data => data.json());

  /**
   * @param {string} url
   */
  constructor(url, token) {
    this.url = url;
    this.token = token;
    this.headers = {
      Accept: 'application/json',
      Authorization: this.token
    };
  }
}

const url = process.env.API_URL || 'http://localhost:3001';
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random()
  .toString(36)
  .substr(-8);
}

const api = new Api(url, token);

export default api;