import Button from "./Button"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <h2>Students Portal</h2>
            </div>
            <div>
              <Button buttonText='Login' />
            </div>
        </div>
    </div>
  )
}

export default Navbar