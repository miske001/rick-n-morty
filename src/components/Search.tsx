import React from 'react'

const SearchBar = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    const searchTimeout = setTimeout(() =>{ //timeout just to make sure we don't call api too frequently
     setSearchTerm(e.target.value)
    }, 500)
    return () => clearTimeout(searchTimeout); //clear timeout
  }

  return (
    <div className="search-container">
      <input className="search-box" type="text" placeholder="Search" onChange={(e) => handleSearch(e)} /> 
    </div>
  )
}

export default SearchBar;