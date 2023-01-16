import PropTypes from 'prop-types'
/**
 * @fileoverview Renders an input field for filtering columns
 * ColumnFilter component
 * @function
 * @param {Object} props - React props
 * @param {Object} props.column - Column object
 * @param {string} props.column.filterValue - Current filter value
 * @param {Function} props.column.setFilter - Function to update filter value
 */
export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column
  return (
    <span>
      Search:{' '}
      <input
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value)
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
// La propriété column est un objet qui contient
// deux propriétés: filterValue et setFilter.
// filterValue est une chaîne qui peut être passée en optionnelle, tandis que setFilter est une fonction qui est obligatoire.
// Dans cet exemple PropTypes.shape()
// décrit les propriétés de l'objet column et
// isRequired pour indiquer que la propriété column
// est requise pour le bon fonctionnement de ce composant.

ColumnFilter.propTypes = {
  column: PropTypes.shape({
    filterValue: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
  }).isRequired,
}
