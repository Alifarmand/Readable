import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../Actions/comment_actions'
import Send from 'react-icons/lib/md/send'
import { generateID } from '../../Utils/utils'

class NewComment extends Component {

  handleSubmit = (e) => {
    const postId = this.props.postID
    const commendBody = e.target.body.value
    const author = e.target.author.value

    if (commendBody === '' || author === '') {
      alert('Both fields are mandatory')
    } else {
      const submitComment = {
        id: generateID(),
        parentId: postId,
        timestamp: Date.now(),
        body: commendBody,
        author: author,
      }
      this.props.createComment(submitComment, postId,
        () => this.props.onClose())
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <ul className='form' >
          <li className='form__item'>
            <label className='form__label'>Name <span className='required' >*</span ></label >
            <input type='text' name='author' className='field-long' />
          </li >
          <li className='form__item'>
            <label className='form__label'>Comment <span className='required' >*</span ></label >
            <textarea name='body'></textarea >
          </li >
          <button ><Send className='send' /></button >
        </ul >
      </form >
    )
  }
}

function mapStateToProps ({posts}) {
  return {
    posts: posts,
  }
}

export default connect(mapStateToProps, {createComment})(NewComment)
