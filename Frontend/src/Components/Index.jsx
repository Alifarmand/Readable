import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SinglePost from './post/Posts'
import { connect } from 'react-redux'
import * as actions from '../Actions/post_actions'
import Add from 'react-icons/lib/md/add'
import Modal from 'react-responsive-modal'
import NewPost from './post/CreatePost'

class Home extends Component {
  static propTypes = {
    posts: PropTypes.array,
  }

  constructor () {
    super()
    this.state = {
      open: false
    }
  }

  onOpenModal = () => {
    this.setState({open: true})
  }

  onCloseModal = () => {
    this.setState({open: false})
  }

  componentDidMount () {
    this.props.fetchAllPosts()
  }

  render () {
    const {posts} = this.props
    return (
      <div className='grid__posts' >
        <Modal classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }} open={this.state.open} onClose={this.onCloseModal} little>
          <div className='modalForm'>
            <h2>Create your post here</h2>
            <NewPost onClose={this.onCloseModal} />
          </div>
        </Modal>
        <div className='grid__header' >
          <h2 className='grid__header__title' >Posts</h2 >
          <button className='grid__header__button' onClick={this.onOpenModal} >Create Post <Add /></button >
        </div >
        <div className='postList'>
          {posts.map((post, index) => (
            <SinglePost key={index} post={post} />
          ))}
        </div>
      </div >
    )
  }
}

function mapStateToProps ({posts}, {match}) {
  const category = match.params.category
  return {
    posts: category ? posts.filter(post => post.category === category) : posts,
  }
}

export default connect(mapStateToProps, actions)(Home)
