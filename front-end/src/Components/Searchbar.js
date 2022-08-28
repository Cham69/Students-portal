import React from "react"

const Searchbar = () => {
  return (
    <div className="searchBar">
        <input type="text" placeholder="Search" className="searchBox" />
        <button className="btn btn-dark">Search</button>
    </div>
  )
}

export default Searchbar