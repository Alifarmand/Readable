import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TimeAgo from 'react-timeago'
import Clock from 'react-icons/lib/fa/clock-o'
import ThumbsUp from 'react-icons/lib/fa/thumbs-up'
import ThumbsDown from 'react-icons/lib/fa/thumbs-down'
import { Link } from 'react-router-dom'
import * as Actions from '../../Actions'

class Posts extends Component {
  componentDidMount () {
    this.props.fetchCommentForPost(this.props.post.id)
  }

  render () {
    const {post, comments, fetchAllPosts, likePost} = this.props
    return (
      <div className='postList__item' >
        {post && (
          <div className='post' >
            <div className='post__header' >
              <p className='post__header__name' >
                <strong >Posted by </strong >{post.author} <strong >to </strong >
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
              <Link to={`/${post.category}/${post.id}`} >
                <div className='post__body__headline' ><h3 >{post.title}</h3 >
                </div >
              </Link >
            </div >

            <div className='post__footer' >
              <div className='post__footer__left' >
                <p >{post.voteScore}
                  <small >{post.voteScore > 1 || post.voteScore < -1
                    ? ' Likes'
                    : ' Like'}</small >
                </p >
                <ThumbsDown className='icons' onClick={() => {likePost(post.id, 'downVote'); fetchAllPosts()}} />
                <ThumbsUp className='icons' onClick={() => {likePost(post.id, 'upVote'); fetchAllPosts()}} />
              </div >
              <div className='post__footer__right' >
                <p >{comments && comments ? comments.length : 0}
                  <small >{comments > 1 ? ' Comment' : ' Comments'}</small >
                </p >
              </div >
            </div >
          </div >
        )}
      </div >
    )
  }
}

function mapStateToProps ({comments}, {post}) {
  return {
    comments: comments[post.id],
  }
}

const mapDispatchToProps = dispatch => ({
  likePost: bindActionCreators(Actions.votePost, dispatch),
  Actions: bindActionCreators(Actions, dispatch),
  fetchCommentForPost: bindActionCreators(Actions.fetchCommentForPost, dispatch),
  fetchAllPosts: bindActionCreators(Actions.fetchAllPosts, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
