import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../Actions/cat_actions'

class Categories extends Component {

  componentDidMount () {
    this.props.fetchCategories()
  }

  render () {
    const {categories} = this.props
    return (
      <div className='grid__categories' >
        <h2 className='grid__header__title' >Categories</h2 >
        <ul className='list' >
          <li className='list__items' ><Link to='/' >All Posts</Link ></li >
          {categories && categories.map((category, index) => (
            <li key={index} className='list__items' >
              <Link key={category.name} to={`/${category.path}`} >{category.name}</Link >
            </li >
          ))}
        </ul >
      </div >
    )
  }
}

function mapStateToProps ({categories}) {
  return {
    categories: categories,
  }
}

export default connect(mapStateToProps, {
  fetchCategories,
})(Categories)
