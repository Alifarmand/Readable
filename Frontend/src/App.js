import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from './Components/navbar'
import ThumbsUp from 'react-icons/lib/fa/thumbs-up'
import ThumbsDown from 'react-icons/lib/fa/thumbs-down'
import Clock from 'react-icons/lib/fa/clock-o'
import Comment from 'react-icons/lib/md/comment'

//import { Route } from 'react-router-dom'
class App extends Component {

  render () {
    console.log(this.props.name)
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
                <div className='post' >
                  <div className='post__header' >
                    <p className='post__header__name' >Ali Farmand</p >
                    <p className='post__header__time' ><Clock
                      className='iconHelper' />
                      <small >2 Hours ago</small >
                    </p >
                  </div >
                  <div className='post__body' >
                    <p className='post__body__content' >Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.</p >
                  </div >
                  <div className='post__footer' >
                    <div className='post__footer__left' >
                      <p >1 <small >Like</small ></p >
                      <ThumbsDown className='icons' />
                      <ThumbsUp className='icons' />
                    </div >
                    <div className='post__footer__right' >
                      <p >23 <small >Comments</small ></p >
                      <button className='button' ><Comment /></button >
                    </div >
                  </div >
                  <div className='post__comment' >
                    <div >
                      <label className='form__label' >
                        Name:
                        <input type='text'
                               ref={(input) => this.input = input}
                               onChange={(event) => this.nameChange(event)} />
                      </label >
                    </div >
                    <div >
                      <label className='form__label' >
                        Name:
                        <input type='text'
                               ref={(input) => this.input = input}
                               onChange={(event) => this.nameChange(event)} />
                      </label >
                      <p >button</p >
                    </div >
                  </div >
                </div >
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


function mapStateToProps() {
  return {
    name: 'Faggot!'
  }
}

export default connect(mapStateToProps)(App)
