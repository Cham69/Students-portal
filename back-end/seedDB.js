const mongoose = require('mongoose');
const IUserModel = require('./models/IUSerModel');
const bcrypt = require('bcrypt');

//Database connection using mongoose
const DBCONNECTION_URL = 'mongodb+srv://ChamakaJ:royalCOLLEGE@studentsportal.tilxsnm.mongodb.net/Students_portal_db?retryWrites=true&w=majority';

mongoose.connect(DBCONNECTION_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(()=>{
        console.log('MongoDB connection is ready');
})
.catch((error)=>{
        console.log(error.message);
    });

//Hashing the passwords
const hashPasswords = async ()=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('superAdminPassword1', salt);
    
    //Users list for seeding
const seedUsers = [
    {
        firstName: 'Harry',
        lastName: 'Potter',
        email: 'harrypotter@gmail.com',
        dateOfBirth: 02/25/1990,
        mobile: 0765412427,
        status: true,
        hashedPassword:hashedPassword,
        accountType: 'admin'
    },
    {
        firstName: 'Ron',
        lastName: 'Wiesly',
        email: 'ronwiesly@gmail.com',
        dateOfBirth: 05/22/1990,
        mobile: 0765414136,
        status: true,
        hashedPassword:hashedPassword,
        accountType: 'admin'
    }
];
await IUserModel.insertMany(seedUsers);
}

hashPasswords();



/* const seed = async ()=>{
    
}

seed().then(()=>{
    console.log('Seeded successfully');
    mongoose.connection.close();
}).catch((error)=>{
    console.log(error.message);
}) */