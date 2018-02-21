import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../Actions/post_actions'
import Send from 'react-icons/lib/md/send'
import { generateID } from '../../Utils/utils'

class NewPost extends Component {

  addNewPost = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const body = e.target.body.value
    const author = e.target.author.value
    const category = e.target.category.value
    let submitPost = []

    if (title === '' || body === '' || author === '' || category === '') {
      alert('All fields must be filled')
    } else {
      submitPost = {
        id: generateID(),
        timestamp: Date.now(),
        title: e.target.title.value,
        body: e.target.body.value,
        author: e.target.author.value,
        category: e.target.category.value,
      }
    }
    this.props.createPost(submitPost, () => this.props.onClose())
  }

  render () {
    return (
      <form onSubmit={this.addNewPost} >
        <ul className='form' >
          <li className='form__item' >
            <label className='form__label' >Name <small
              className='required' >*</small ></label >
            <input type='text' name='author' className='field-long' />
          </li >
          <li className='form__item' >
            <label className='form__label' >Title <small
              className='required' >*</small ></label >
            <input type='text' name='title' className='field-long' />
          </li >
          <li className='form__item' >
            <label className='form__label' >Post <small
              className='required' >*</small ></label >
            <textarea name='body' />
          </li >
          <li className='form__item' >
            <label className='form__label' >Category <small
              className='required' >*</small ></label >
            <select name='category' className='field-select' >
              {this.props.categories &&
              this.props.categories.map((category) => (
                <option key={category.name}
                        value={category.name} >{category.name}</option >
              ))}
            </select >
          </li >
          <button ><Send className='send' /></button >
        </ul >
      </form >
    )
  }
}

function mapStateToProps ({posts, categories}) {
  return {
    posts: posts,
    categories: categories,
  }
}

export default connect(mapStateToProps, {createPost})(NewPost)
