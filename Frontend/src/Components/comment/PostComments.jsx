import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimeAgo from 'react-timeago'
import ThumbsUp from 'react-icons/lib/fa/thumbs-up'
import ThumbsDown from 'react-icons/lib/fa/thumbs-down'
import Modal from 'react-responsive-modal'
import EditComment from './EditComment'
import * as commentActions from '../../Actions/comment_actions'
import Edit from 'react-icons/lib/fa/edit'
import Trash from 'react-icons/lib/fa/trash'

class PostComment extends Component {

  constructor () {
    super()
    this.state = {
      openEditComment: false,
      postID: '',
      commentID: ''
    }
  }

  openEditCommentModal = (postID, commentID) => {
    this.setState({
      openEditComment: true,
      postID,
      commentID
    })
  }

  closeEditCommentModal = () => {
    this.setState({openEditComment: false})
  }

  deleteComment = (comment) => {
    let parentId = comment.parentId
    this.props.deleteComment(comment.id, () => {
      this.props.history.push(`/post/${parentId}`)
      this.props.fetchCommentForPost(comment.parentId)
    })
  }

  render() {
    return (
      <div>
        {this.state.openEditComment &&
        <Modal classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }} open={this.state.openEditComment} onClose={this.closeEditCommentModal} little>
          <div className='modalForm'>
            <EditComment postID={this.state.postID} commentID={this.state.commentID} onClose={this.closeEditCommentModal} />
          </div>
        </Modal>
        }
        {this.props.comments.map(comment => (
          <div className="comment" key={comment.id}>
            <div className="comment__body">
              <p>{comment.body}</p>
            </div>
            <div className="comment__footer">
              <div className="comment__footer__left">
                <p >{comment.voteScore}
                  <small >{comment.voteScore > 1 || comment.voteScore < -1
                    ? ' Likes'
                    : ' Like'}</small >
                </p >
                <ThumbsDown className='icons small' onClick={() => {
                  this.props.voteComment(comment.id, comment.parentId, "downVote")
                }} />
                <ThumbsUp className='icons small' onClick={() => {
                  this.props.voteComment(comment.id, comment.parentId, "upVote")
                }} />
              </div>
              <div className="comment__footer__right">
                <p className='commentBy'> by <b>{comment.author}</b> <TimeAgo date={comment.timestamp} /></p>
                  <button
                    className='button edit'
                    onClick={() => this.openEditCommentModal(comment.parentId, comment.id)}><Edit /></button >
                <button className='button delete'
                        onClick={() => this.deleteComment(comment)}><Trash />
                </button >
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, commentActions)(PostComment)
