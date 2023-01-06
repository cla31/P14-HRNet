import React from 'react'
import '../style/components/search.css'

const Search = () => {
  return (
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
  )
}

export default Search
