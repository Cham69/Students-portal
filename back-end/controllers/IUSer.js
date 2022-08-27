//Fetch and send all the users
exports.getAllUsers = (req, res)=>{
    res.send('Send all users');
}

//Fetch a sigle user
exports.getSingleUser = (req, res)=>{
    res.send('Send a single user');
}

//Create a user by Admin with temporary password
exports.addTempUser = (req, res)=>{
    res.send('Add a temporary user');
}

//Edit the user
exports.editUser = (req, res)=>{
    res.send('Edit the user');
}
