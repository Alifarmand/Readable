import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import {
  fetchCategories,
  fetchCategoryPosts,
} from '../Actions'

class Categories extends Component {
  componentWillMount () {
    this.props.fetchCategories()
  }

  render () {
    const { categories } = this.props
    console.log(categories)
    return (
      <div className='grid__categories' >
        <h2 className='grid__header__title' >Categories</h2 >
        <ul className='list' >
          {/*{categories.map((cat, index) => (*/}
            {/*<li key={index} className='list__items' ><Link to={cat.path} >{cat.name}</Link ></li >*/}
          {/*))}*/}
          <li className='list__items' ><a href='' >All Posts</a ></li >
          <li className='list__items' ><a href='' >All Posts</a ></li >
        </ul >
      </div >
    )
  }
}

function mapStateToProps (state) {
  return {categories: state.categories}
  dispatch => ({
    fetchAllCategories: bindActionCreators(
      fetchCategories,
      dispatch
    )
  })
}

export default connect(mapStateToProps, {fetchCategories})(Categories)