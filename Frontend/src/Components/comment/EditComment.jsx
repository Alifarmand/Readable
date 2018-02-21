import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as commentActions from '../../Actions/comment_actions'
import Send from 'react-icons/lib/md/send'

class EditComment extends Component {

  componentDidMount () {
    this.props.fetchCommentForPost(this.props.postID)
  }

  updateComment = (e) => {
    e.preventDefault()
    const commentId = this.props.commentID
    const postId = this.props.postID
    const timestamp = Date.now()
    const body = e.target.body.value

    if (body === '') {
      alert('Comment cannot be empty')
    } else {
      this.props.updateComment(commentId, postId, timestamp, body,
        () => this.props.onClose())
    }
  }

  render () {
    return (
      <div >
        <form onSubmit={this.updateComment} >
          <h2 >Edit Comment</h2 >
          <ul className='form' >
            <li className='form__item'>
              <label className='form__label'>Comment <span className='required' >*</span ></label >
              <textarea defaultValue={this.props.comment.body} name='body' />
            </li >
            <button ><Send className='send' /></button >
          </ul >
        </form >
      </div >
    )
  }
}

function mapStateToProps ({comments}, ownProps) {
  return {
    comment: _.find(comments[ownProps.postID], {id: ownProps.commentID}),
  }
}

export default connect(mapStateToProps, commentActions)(EditComment)
