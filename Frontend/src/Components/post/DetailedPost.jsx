import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimeAgo from 'react-timeago'
import Clock from 'react-icons/lib/fa/clock-o'
import ThumbsUp from 'react-icons/lib/fa/thumbs-up'
import ThumbsDown from 'react-icons/lib/fa/thumbs-down'
import Comment from 'react-icons/lib/md/comment'
import Edit from 'react-icons/lib/fa/edit'
import Trash from 'react-icons/lib/fa/trash'
import { Link } from 'react-router-dom'
import { fetchCommentForPost } from '../../Actions/comment_actions'
import { fetchAllPosts, votePost, deletePost } from '../../Actions/post_actions'
import PostComment from '../comment/PostComments'
import NewComment from '../comment/CreateComment'
import EditPost from './EditPost'
import Modal from 'react-responsive-modal'
import { PropagateLoader } from 'react-spinners'

class PostDetail extends Component {
  constructor () {
    super()
    this.state = {
      openComment: false,
      openEditPost: false,
    }
  }

  openCommentModal = () => {
    this.setState({openComment: true})
  }

  closeCommentModal = () => {
    this.setState({openComment: false})
  }

  openEditPostModal = () => {
    this.setState({openEditPost: true})
  }

  closeEditPostModal = () => {
    this.setState({openEditPost: false})
  }

  componentDidMount () {
    this.props.fetchAllPosts()
    this.props.fetchCommentForPost(this.props.match.params.postId)
  }

  onPostDelete = () => {
    const id = this.props.match.params.postId
    this.props.deletePost(id)
    this.props.history.push('/')
  }

  render () {
    const {post, comments, votePost, fetchAllPosts} = this.props
    if (!post) {
      return (
      <div className='spinner'>
        <PropagateLoader color={'#F2994A'} />
      </div >
      )
    }
    return (
      <div className='postList postDetail' >
        <Modal classNames={{overlay: 'custom-overlay', modal: 'custom-modal'}}
               open={this.state.openComment} onClose={this.closeCommentModal}
               little >
          <div className='modalForm' >
            <h2 >Write a comment</h2 >
            <NewComment postID={post.id} onClose={this.closeCommentModal} />
          </div >
        </Modal >
        <Modal classNames={{overlay: 'custom-overlay', modal: 'custom-modal'}}
               open={this.state.openEditPost} onClose={this.closeEditPostModal}
               little >
          <div className='modalForm' >
            <EditPost postID={post.id} onClose={this.closeEditPostModal} />
          </div >
        </Modal >
        {post && (
          <div className='postList__item' >
            <div className='post' >
              <div className='post__header' >
                <p className='post__header__name' >
                  <strong >Posted
                    by </strong >{post.author}<strong > to </strong >
                  <Link className='link'
                        to={`/${post.category}`} >{post.category}</Link >
                </p >
                <p className='post__header__time' >
                  <small >
                    <Clock className='iconHelper' />
                    <TimeAgo date={post.timestamp} />
                  </small >
                </p >
              </div >

              <div className='post__body' >
                <div className='post__body__headline' ><h3 >{post.title}</h3 >
                </div >
                <div className='post__body__content' ><p >{post.body}</p >
                </div >
              </div >

              <div className='post__footer' >
                <div className='post__footer__left' >
                  <p >{post.voteScore}
                    <small >{post.voteScore > 1 || post.voteScore < -1
                      ? ' Likes'
                      : ' Like'}</small >
                  </p >
                  <ThumbsDown className='icons' onClick={() => {
                    votePost(post.id, 'downVote')
                    fetchAllPosts()
                  }} />
                  <ThumbsUp className='icons' onClick={() => {
                    votePost(post.id, 'upVote')
                    fetchAllPosts()
                  }} />
                </div >
                <div className='post__footer__actions' >
                  <button className='button edit'
                          onClick={this.openEditPostModal} ><Edit /></button >
                  <button className='button delete'
                          onClick={this.onPostDelete} ><Trash />
                  </button >
                  <button className='button shadow' onClick={this.openCommentModal} >
                    <Comment /></button >
                </div >
              </div >
              {post && comments &&
              <PostComment
                category={post.category}
                comments={comments}
                history={this.props.history} />}
            </div >
          </div >
        )}
      </div >
    )
  }
}

function mapStateToProps ({posts, comments}, {match}) {
  const post = _.find(posts, {id: match.params.postId})
  return {
    post: post,
    comments: comments[match.params.postId],
  }
}

export default connect(mapStateToProps,
  {fetchAllPosts, votePost, deletePost, fetchCommentForPost})(PostDetail)
