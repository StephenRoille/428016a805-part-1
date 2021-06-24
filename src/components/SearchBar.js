import React, { useState } from "react"

const SearchBar = ({ onSearchSubmit, isLoading }) => {
  const [term, setTerm] = useState("")

  const onSumbit = (e) => {
    e.preventDefault()
    onSearchSubmit(term)
  }

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSumbit} className={`ui ${isLoading ? "loading" : ""} form`}>
        <div className="field">
          <label htmlFor="search">Video Search</label>
          <input
            type="text"
            name="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
