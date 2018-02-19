import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from './Components/navbar'
import Categories from './Components/categories'
import ThumbsUp from 'react-icons/lib/fa/thumbs-up'
import ThumbsDown from 'react-icons/lib/fa/thumbs-down'
import Clock from 'react-icons/lib/fa/clock-o'
import Comment from 'react-icons/lib/md/comment'
import Add from 'react-icons/lib/md/add'
import Send from 'react-icons/lib/md/send'
import ModalGeneral from './Components/modal'

//import { Route } from 'react-router-dom'
class App extends Component {
  state = {
    open: false,
  }
  onOpenModal = () => {
    this.setState({open: true})
  }

  onCloseModal = () => {
    this.setState({open: false})
  }

  render () {
    console.log(this.props.name)
    return (
      <div className='App' >
        <ModalGeneral open={this.state.open} closeModal={this.onCloseModal} />
        <header className='App-header' >
          <Navigation />
        </header >
        <div className='grid' >
          <Categories />
          <div className='grid__posts' >
            <div className='grid__header' >
              <h2 className='grid__header__title' >Posts</h2 >
              <button className='grid__header__button'
                      onClick={this.onOpenModal} >Create Post <Add /></button >
            </div >
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
                    <h2 className='post__body__headline' >This will be the title
                      of the shit</h2 >
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
                    <form action='' className='form' >
                      <div className='form__item' >
                        <label className='form__label' >Name:</label >
                        <input type='text'
                               ref={(input) => this.input = input}
                               onChange={(event) => this.nameChange(event)} />
                      </div >
                      <div className='form__item' >
                        <label className='form__label' >Comment:</label >
                        <input type='text'
                               ref={(input) => this.input = input}
                               onChange={(event) => this.nameChange(event)} />
                      </div >
                      <button ><Send className='send' /></button >
                    </form >
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

function mapStateToProps () {
  return {
    name: 'Faggot!',
  }
}

export default connect(mapStateToProps)(App)
