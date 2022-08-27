const mongoose = require('mongoose');
const IUserModel = require('./models/IUSerModel');

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

//Users list for seeding
const seedUsers = [
    {
        firstName: 'Harry',
        lastName: 'Potter',
        email: 'harrypotter@gmail.com',
        dateOfBirth: 02/25/1990,
        mobile: 0765412427,
        status: true,
        password:'superAdmin',
        accountType: 'admin'
    },
    {
        firstName: 'Ron',
        lastName: 'Wiesly',
        email: 'ronwiesly@gmail.com',
        dateOfBirth: 05/22/1990,
        mobile: 0765414136,
        status: true,
        password:'superAdmin',
        accountType: 'admin'
    }
];

const seed = async ()=>{
    await IUserModel.insertMany(seedUsers);
}

seed().then(()=>{
    console.log('Seeded successfully');
    mongoose.connection.close();
}).catch((error)=>{
    console.log(error.message);
})