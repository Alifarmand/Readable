import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import notFound from '../notFound.png'
import CountDown from 'react-number-count-down'
import { withRouter } from 'react-router-dom'

class PageNotFound extends Component {

  redirectUser () {
    this.props.history.push('/')
  }

  render () {
    return (
      <div className='notFound' >
        <h3 className='notFound__header' >Caution!</h3 >
        <img className='notFound__image' src={notFound} alt='' />
        <Link className='notFound__link' to='/' >You can go back here or we can redirect you in </Link >
        <CountDown
          from={10}
          to={1}
          type={'-'}
          addon={'seconds'}
          interval={1}
          onComplete={() => this.redirectUser()} />
      </div >
    )
  }
}

export default withRouter(PageNotFound)