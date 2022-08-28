import Searchbar from "../Components/Searchbar"
import AddUser from "./AddUser"
import UserList from "./UserList"
const Admin = () => {
  return (
    <div className="admin">
        <div className="container-fluid">
            <Searchbar />
            <AddUser />
            <UserList />
        </div>
    </div>
  )
}

export default Admin