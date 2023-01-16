import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import '../style/components/globalFilter.css'
import PropTypes from 'prop-types'

/**
 * @fileoverview Renders a global filter for a table
 * GlobalFilter component
 * @function
 * Handle the global filter for a table
 * @param {string} globalFilter - The current value of the global filter
 * @param {function} setGlobalFilter - The function to update the global filter
 */

export const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span className="search">
      <div id="submitsearch">
        <span>Search: </span>
      </div>
      <input
        className="search-input"
        id="searchInput"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`Search records...`}
        style={{
          fontSize: '1.1rem',
          margin: '1rem 0',
        }}
      />
    </span>
  )
}

// La propriété globalFilter est une chaîne
// qui peut être passée en optionnelle,
// tandis que setGlobalFilter est une
// fonction qui est obligatoire.
// Dans cet exemple, j'ai utilisé
// PropTypes.string pour décrire globalFilter,
// PropTypes.func pour décrire setGlobalFilter
// et isRequired pour indiquer que la propriété
// setGlobalFilter est requise pour le
// bon fonctionnement de ce composant.

GlobalFilter.propTypes = {
  globalFilter: PropTypes.string,
  setGlobalFilter: PropTypes.func.isRequired,
}
