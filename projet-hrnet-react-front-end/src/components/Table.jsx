import React from 'react'
import '../style/components/table.css'
import Dropdown from '../components/Dropdown'
import { numberFilterOptions } from '../datas/numberFilter'
import Column from '../components/Column'
import Search from '../components/Search'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Table = () => {
  const [setNumberFilter] = useState(1)
  const handleChangeFilter = (event) => {
    const selectedValue = event.target.value
    setNumberFilter(selectedValue)
  }
  //Dans tableData, pour ne récupérer que les objets qui possèdent les clés souhaitées
  //afin de ne pas avoir de lignes vides ds mon tableau d'affichage.
  const tableData = useSelector((state) => state.table)
  console.log('tableData', tableData)
  const desiredKeys = [
    'firstName',
    'lastName',
    'birthDate',
    'department',
    'startDate',
    'street',
    'city',
    'state',
    'zipcode',
  ]

  const filteredObjects = tableData.filter((object) => {
    return desiredKeys.every((key) => object.hasOwnProperty(key))
  })

  console.log('filtered objets', filteredObjects)

  return (
    <>
      <div className="section-film-search">
        <div className="container-filter">
          <p>Show</p>
          <div className="filter">
            <Dropdown
              datas={numberFilterOptions}
              listenOption={handleChangeFilter}
              colorDropdownSelect="white"
            />
          </div>
          <p>entries</p>
        </div>
        <Search />
      </div>

      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>
                <Column columnName={'firstName'} />
              </th>
              <th>
                <Column columnName={'Last Name'} />
              </th>
              <th>
                <Column columnName={'Sart Date'} />
              </th>
              <th>
                <Column columnName={' Department'} />
              </th>
              <th>
                <Column columnName={' Date of birth'} />
              </th>
              <th>
                <Column columnName={'Street'} />
              </th>
              <th>
                <Column columnName={'City'} />
              </th>
              <th>
                <Column columnName={'State'} />
              </th>
              <th>
                <Column columnName={'Zipcode'} />
              </th>
            </tr>
          </tbody>
          <tbody>
            {filteredObjects.map((item, index) => (
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
    </>
  )
}

export default Table
