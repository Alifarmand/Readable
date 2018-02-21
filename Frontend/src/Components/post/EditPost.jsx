import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Send from 'react-icons/lib/md/send'
import { fetchAllPosts, updatePost } from '../../Actions/post_actions'
import { fetchCommentForPost } from '../../Actions/comment_actions'

class EditPost extends Component {
  componentDidMount () {
    this.props.fetchAllPosts()
    this.props.fetchCommentForPost(this.props.postID)
  }

  editPost = (e) => {
    e.preventDefault()
    const postId = this.props.post.id
    const title = e.target.title.value
    const body = e.target.body.value

    if (body === '' || title === '') {
      alert('Both fields are mandatory')
    } else {
      this.props.updatePost(postId, title, body,
        () => this.props.onClose())
    }
  }

  render () {
    const {post} = this.props

    return (
      <div >
        <form onSubmit={this.editPost} >
          <h2 >Edit Post</h2 >
          <ul className='form' >
            <li className='form__item'>
              <label className='form__label'>Title <span className='required' >*</span ></label >
              <input defaultValue={post.title} type='text' name='title'
                     className='field-long' />
            </li >
            <li className='form__item'>
              <label className='form__label'>Post <span className='required' >*</span ></label >
              <textarea
                defaultValue={post.body}
                name='body' />
            </li >
            <button ><Send className='send' /></button >
          </ul >
        </form >
      </div >
    )
  }
}

function mapStateToProps ({posts, comments}, ownProps) {
  return {
    post: _.find(posts, {id: ownProps.postID}),
    comments: comments[ownProps.postID],
  }
}

export default connect(mapStateToProps,
  {fetchAllPosts, updatePost, fetchCommentForPost})(EditPost)
