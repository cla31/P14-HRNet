import React from 'react'
import '../style/components/dropdown.css'

const Dropdown = ({ datas, listenOption }) => {
  const options = datas.map((value) => ({ value: value, label: value }))
  return (
    <select
      className="dropdown-select"
      onChange={listenOption}
      required="required"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
