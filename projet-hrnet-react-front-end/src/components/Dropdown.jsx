import React from 'react'
import '../style/components/dropdown.css'
import PropTypes from 'prop-types'

/**
 * @fileoverview Renders a dropdown menu with options
 * Dropdown component
 * @function
 * @param {Object} props - React props
 * @param {Array} props.datas - Array of options for the dropdown
 * @param {Function} props.listenOption - Function to handle option selection
 * @param {string} props.colorDropdownSelect -  color of the selected option.
 */

const Dropdown = ({ datas, listenOption, colorDropdownSelect }) => {
  const options = datas.map((value) => ({ value: value, label: value }))
  return (
    <select
      className="dropdown-select"
      onChange={listenOption}
      required="required"
      style={{
        color: colorDropdownSelect,
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

Dropdown.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.string).isRequired,
  listenOption: PropTypes.func,
}

export default Dropdown
