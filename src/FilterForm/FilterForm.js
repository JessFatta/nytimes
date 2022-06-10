import React from 'react'
import './FilterForm.css'

const FilterForm = ({getSections}) => {
   const handleChange = (section) => {
    getSections(section)
  }

  return (
    <div className='section-filter'>
      <label className='filter-label' name='designation'>Browse By Article Section</label>
      <select className='section' name='section' onChange={({target: {value}}) => handleChange(value)}>
        <option value='All'>All Sections</option>
        <option value='Australia'>Australia</option>
        <option value='Europe'>Europe</option>
        <option value='Politics'>Politics</option>
        <option value=''></option>
        <option value=''></option>
      </select>
    </div>
  )

}

export default FilterForm