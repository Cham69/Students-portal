import Searchbar from "../Components/Searchbar"
import UserList from "./UserList"
const Admin = () => {
  return (
    <div className="admin">
        <div className="container">
            <Searchbar />
            <UserList />
        </div>
    </div>
  )
}

export default Admin