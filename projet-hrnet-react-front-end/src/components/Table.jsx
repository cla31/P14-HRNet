import React, { useMemo } from 'react'
import '../style/components/table.css'
import { COLUMNS } from '../utils/columns'
import { useSelector } from 'react-redux'
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from 'react-table'
import { GlobalFilter } from '../components/GlobalFilter'
import { ColumnFilter } from '../components/ColumnFilter'
// cf: https://blog.openreplay.com/better-tables-with-react-table/
//Penser à installer date-fns pour le formatage des dates:!!
//https://date-fns.org/docs/Getting-Started#installation

/**

    @fileoverview Table component of the application
    Table component
    @description This component displays a table of employees data and allows for sorting, filtering, and pagination of the data.
 */

const Table = () => {
  const columns = useMemo(() => COLUMNS, []) // memorize before adding to useTable hook
  const stateEmployees = useSelector((state) => state.employees.employees)
  console.log('les employés ajoutés ds le state', stateEmployees)

  const data = useMemo(() => stateEmployees, []) // memorize before adding to useTable hook
  //Code affichage tableau avec la librairie

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    }
  }, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns, // useTable hook takes in memoized columns and data to be displayed
      data,
      defaultColumn, // add defaultColumn
    },
    useFilters, // add useFilters above useGlobalFilter
    useGlobalFilter,
    useSortBy, // this adds sorting feature to the table instance
    usePagination
  )

  return (
    <>
      <div className="section-film-search">
        <div className="container-filter">
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      {/* apply the table props */}
      <div className="table">
        <table {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render('Header')}
                        <span className="custom-filter">
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' ▼'
                              : ' ▲'
                            : ' ▲'}
                        </span>
                        <div>
                          {column.canFilter ? column.render('Filter') : null}
                        </div>{' '}
                        {/*Add column filter component in each column header  */}
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              page.map((row, i) => {
                // Prepare the row for display
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className="navigation-table">
        <div className="pagination" style={{ marginTop: '1rem' }}>
          <div className="button-pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </button>{' '}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {'>>'}
            </button>{' '}
          </div>
          <div className="navigation-input">
            <span className="page-n-of-n">
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <span className="go-to-page">
              Go to page:{''}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
                style={{ width: '100px' }}
              />
            </span>{' '}
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
