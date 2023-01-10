import { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import '../style/components/globalFilter.css'

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
