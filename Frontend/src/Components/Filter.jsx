import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sortPost } from '../Actions/post_actions'
import Watch from 'react-icons/lib/md/watch-later'
import Likes from 'react-icons/lib/fa/thumbs-o-up'

class Filter extends Component {
  static propTypes = {
    posts: PropTypes.array,
  }

  render () {
    const {sortPost} = this.props

    return (
      <div>
        <div className='grid__categories' >
          <h2 className='grid__header__title' >Filter By</h2 >
          <div className='filter'>
            <button className='filter__Button' onClick={() => sortPost('timestamp')} ><Watch />Date</button >
            <button className='filter__Button' onClick={() => sortPost('voteScore')} ><Likes />Likes</button >
          </div>
        </div >
      </div >

    )
  }
}

export default connect(null, { sortPost })(Filter)
