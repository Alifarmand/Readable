import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { postReducer } from './Reducers/post_reducer'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  postReducer,
  //This makes the redux tab available in the console
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())

ReactDOM.render(
  <BrowserRouter >
    {/*Passing store to provider allows any component to access store or dispatch actions*/}
    <Provider store={store} >
      <App />
    </Provider >
  </BrowserRouter >,
  document.getElementById('root'),
)
registerServiceWorker()
