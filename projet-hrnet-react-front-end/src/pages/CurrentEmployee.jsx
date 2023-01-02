import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/pages/CurrentEmployees.css'
import logo from '../assets/logo.png'
import Dropdown from '../components/Dropdown'
import { numberFilterOptions } from '../datas/numberFilter'

const CurrentEmployee = () => {
  const [numberFilter, setNumberFilter] = useState(1)
  const handleChangeFilter = (event) => {
    const selectedValue = event.target.value
    setNumberFilter(selectedValue)
  }
  const tableData = useSelector((state) => state.table)
  // console.log("tableData",tableData)
  return (
    <div className="body-table">
      <div className="header-table">
        <div className="logo-table-employee">
          <img className="img-logo" src={logo} alt="Logo-HRnet" />
        </div>
        <div className="title-table">
          <h1>Current Employees</h1>
        </div>
        <div className="link-home">
          <Link to="/">-Home-</Link>
        </div>
      </div>
      <div className="section-film-search">
        <div className="container-filter">
          <div className="filter">
            <Dropdown
              datas={numberFilterOptions}
              listenOption={handleChangeFilter}
              colorDropdownSelect="white"
            />
          </div>
        </div>
        <div className="search">
          <input
            className="search-input"
            type="text"
            id="searchInput"
            placeholder="Search.."
          />
          <div id="submitsearch">
            <span>Search</span>
          </div>
        </div>
      </div>

      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>Fist Name</th>
              <th>Last Name</th>
              <th>Sart Date</th>
              <th>Department</th>
              <th>Date of birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zipcode</th>
            </tr>
          </tbody>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={item + index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.startDate}</td>
                <td>{item.department}</td>
                <td>{item.birthDate}</td>
                <td>{item.street}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="navigation-table">
        <div className="pages-entries">
          <p className="show-entries">-Showing 0 to 0 of 0 entries-</p>
        </div>
        <div className="previous-next">
          <p className="previous">{'< Previous'}</p>
          <p className="next">{'Next >'}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentEmployee
