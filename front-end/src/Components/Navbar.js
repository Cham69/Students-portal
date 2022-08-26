import Button from "./Button"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <h2>Students Portal</h2>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="Search" />
                <Button buttonText='Search'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar