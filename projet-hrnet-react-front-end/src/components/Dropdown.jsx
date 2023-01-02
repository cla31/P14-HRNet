import React from 'react'
import '../style/components/dropdown.css'

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

export default Dropdown
