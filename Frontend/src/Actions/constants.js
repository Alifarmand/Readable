export const ROOT_URL = 'http://localhost:3001'; // http://localhost:5001';
export const AUTH_HEADERS = { 'Authorization': 'whatever-you-want', 'Accept': 'application/json', };

export function generateId() {
  function method() {
    return Math.floor((1 + Math.random()) * 400000).toString(25)
  }
  return method() + '-' + method() + '-' + method() + '-' + method() + '-' + method();
}