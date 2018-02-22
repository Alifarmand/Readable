import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Components/Index'
import PostDetail from './Components/post/DetailedPost'
import Categories from './Components/Categories'
import PageNotFound from './Components/NotFound'
import Filter from './Components/Filter'

class Index extends Component {
  static propTypes = {
    posts: PropTypes.array,
  }

  render () {
    return (
      <div className='App' >
        <header className='App-header' >
          <div >
            <Link to='/' ><h1 >Readable</h1 ></Link>
          </div >
        </header >
        <div className='grid' >
          <div className='filters' >
            <Categories />
            <Filter />
          </div >

          <Switch className='niggersDieHere'>
            <Route exact path='/' component={Home}>
              <Route path='*' component={PageNotFound} />
            </Route>
            <Route exact path='/:category' component={Home} />
            <Route exact path='/:category/:postId' component={PostDetail} />
            <Route component={PageNotFound} />
          </Switch >
        </div >
      </div >
    )
  }
}

export default withRouter(connect()(Index))
