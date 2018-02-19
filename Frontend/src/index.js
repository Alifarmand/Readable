import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import allReducers from './Reducers/index'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  allReducers,
  composeEnhancers(
    applyMiddleware(thunk)
  ))

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
