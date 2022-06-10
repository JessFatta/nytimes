import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import FilterForm from '../FilterForm/FilterForm'

const Header = ({getSections}) => {
  return (
    <div className='header'>
      <Link to='/'>
        <h1>Da Times</h1>
      </Link>
      <div className='drop-down'>
        <FilterForm getSections={getSections} />
      </div>
    </div>
  )
}

export default Header