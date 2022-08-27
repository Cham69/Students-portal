const IUserModel = require('../models/IUSerModel.js');

//Fetch and send all the users
exports.getAllUsers = async (req, res)=>{
    try{
        const allUsers = await IUserModel.find();
        res.status(200).json(allUsers);
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

//Edit the user
exports.editUser = async(req, res)=>{
    const userId = req.params.id;
    const {firstName, lastName, dateOfBirth, mobile, password} = req.body;
    const newData = {
        firstName, 
        lastName, 
        dateOfBirth, 
        mobile, 
        password
    }
    try{
        const editedUser = await IUserModel.findByIdAndUpdate(userId, newData);
        res.status(200).json('Changed the info successfully');
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

//Create a user by Admin with temporary password
exports.addTempUser = async (req, res)=>{
    const {firstName, lastName, email, dateOfBirth, mobile, status, password, accountType} = req.body;
    const user = new IUserModel({
        firstName, lastName, email, dateOfBirth, mobile, status, password, accountType
    });
    try{
        await user.save();
        res.status(201).json('A user has been added Successfully!')
    }catch(error){
        res.status(409).json({message:error.message});
    }
}


//Fetch a sigle user
exports.getSingleUser = async (req, res)=>{
    const userId = req.params.id;
    try{
        const user = await IUserModel.findById(userId);
        res.status(200).json({user})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
