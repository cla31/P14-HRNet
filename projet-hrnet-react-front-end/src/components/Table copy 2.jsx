import React from 'react'
// import ReactTable from 'react-table'
import { useTable } from 'react-table'
//première version avec la bibliothèque react-table

const Table = () => {
  // const datas = [
  //   {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     sartDate: '09/09/1999',
  //     department: 'Buisness',
  //     dateOfBirth: '07/02/1980',
  //     street: 'Vel',
  //     city: 'Toulouse',
  //     state: 'Alaska',
  //     zipcod: '31300',
  //   },
  //   {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     sartDate: '09/09/1999',
  //     department: 'Buisness',
  //     dateOfBirth: '07/02/1980',
  //     street: 'Vel',
  //     city: 'Toulouse',
  //     state: 'Alaska',
  //     zipcod: '31300',
  //   },
  //   {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     sartDate: '09/09/1999',
  //     department: 'Buisness',
  //     dateOfBirth: '07/02/1980',
  //     street: 'Vel',
  //     city: 'Toulouse',
  //     state: 'Alaska',
  //     zipcod: '31300',
  //   },
  //   {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     sartDate: '09/09/1999',
  //     department: 'Buisness',
  //     dateOfBirth: '07/02/1980',
  //     street: 'Vel',
  //     city: 'Toulouse',
  //     state: 'Alaska',
  //     zipcod: '31300',
  //   },
  //   {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     sartDate: '09/09/1999',
  //     department: 'Buisness',
  //     dateOfBirth: '07/02/1980',
  //     street: 'Vel',
  //     city: 'Toulouse',
  //     state: 'Alaska',
  //     zipcod: '31300',
  //   },
  // ]
  // const columns = [
  //   {
  //     Header: 'First Name',
  //     accessor: 'firstName',
  //   },
  //   {
  //     Header: 'Last Name',
  //     accessor: 'lastName',
  //   },
  //   {
  //     Header: 'Start Date',
  //     accessor: 'sartDate',
  //   },
  //   {
  //     Header: 'Department',
  //     accessor: 'department',
  //   },
  //   {
  //     Header: 'Date of birth',
  //     accessor: 'dateOfBirth',
  //   },
  //   {
  //     Header: 'Street',
  //     accessor: 'street',
  //   },
  //   {
  //     Header: 'City',
  //     accessor: 'city',
  //   },
  //   {
  //     Header: 'State',
  //     accessor: 'state',
  //   },
  //   {
  //     Header: 'Zipcod',
  //     accessor: 'zipcod',
  //   },
  // ]
  // return (
  //   <div>
  //     <ReactTable data={datas} columns={columns} />
  //   </div>
  //   // <div>"Hello"</div>
  // )
  const data = React.useMemo(
    () => [
      {
        firstName: 'John',
        lastName: 'Doe',
        sartDate: '09/09/1999',
        department: 'Buisness',
        dateOfBirth: '07/02/1980',
        street: 'raihd',
        city: 'Paris',
        state: 'Alaska',
        zipcod: '75000',
      },
      {
        firstName: 'Julie',
        lastName: 'Martinez',
        sartDate: '21/09/2022',
        department: 'RH',
        dateOfBirth: '18/05/1970',
        street: 'des cerisiers',
        city: 'Toulouse',
        state: 'Chicago',
        zipcod: '31300',
      },
      {
        firstName: 'Tom',
        lastName: 'Stark',
        sartDate: '10/09/2005',
        department: 'IT',
        dateOfBirth: '22/12/1977',
        street: 'sun',
        city: 'Toulouse',
        state: 'Californie',
        zipcod: '31300',
      },
      {
        firstName: 'Tartanpion',
        lastName: 'jacques',
        sartDate: '03/01/2018',
        department: 'Buisness',
        dateOfBirth: '14/09/1992',
        street: 'plage',
        city: 'Paris',
        state: 'Nevada',
        zipcod: '75500',
      },
      {
        firstName: 'Toto',
        lastName: 'Dupont',
        sartDate: '29/04/2017',
        department: 'RH',
        dateOfBirth: '25/06/1980',
        street: 'bonbons',
        city: 'Toulouse',
        state: 'Utath',
        zipcod: '20000',
      },
    ],

    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Start Date',
        accessor: 'sartDate',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'Date of birth',
        accessor: 'dateOfBirth',
      },
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Zipcod',
        accessor: 'zipcod',
      },
    ],

    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
