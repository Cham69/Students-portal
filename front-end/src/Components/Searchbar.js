import Button from "./Button"
const Searchbar = () => {
  return (
    <div className="searchBar">
        <input type="text" placeholder="Search" className="searchBox" />
        <Button buttonText='Search'/>
    </div>
  )
}

export default Searchbar