import React, { Component } from 'react'
import Navigation from './Components/navbar'
//import { Route } from 'react-router-dom'
class App extends Component {

  state = {
    pages: {
      root: '/',
      category: '/category',
    },
  }

  render () {
    return (
      <div className='App' >
        <header className='App-header' >
          <Navigation />
        </header >
        <div className='grid' >
          <div className='grid__categories' >
            <h2 className='grid__title' >Categories</h2 >
            <ul className='list' >
              <li className='list__items' ><a href='' >All Posts</a ></li >
              <li className='list__items' ><a href='' >React</a ></li >
              <li className='list__items' ><a href='' >Redux</a ></li >
              <li className='list__items' ><a href='' >Udacity</a ></li >
            </ul >
          </div >
          <div className='grid__posts' >
            <h2 className='grid__title' >Posts</h2 >
            <ul className='postList' >
              <li className='postList__item' >
                <div ><p >Lorem ipsum and more of those things!</p ></div >
              </li >
              <li className='postList__item' >2</li >
              <li className='postList__item' >3</li >
              <li className='postList__item' >4</li >
            </ul >
          </div >
        </div >
      </div >
    )
  }
}

export default App
