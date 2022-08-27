const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const dotenv = require ('dotenv');
const cors = require ('cors');
const iUserRoutes = require ('./routes/IUser.js');
const notesRoutes = require ('./routes/notes.js');

//Define express app and port
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

//Basic routes
app.use('/users', iUserRoutes);
app.use('/notes', notesRoutes);

//Database connection using mongoose
const DBCONNECTION_URL = 'mongodb+srv://ChamakaJ:royalCOLLEGE@studentsportal.tilxsnm.mongodb.net/Students_portal_db?retryWrites=true&w=majority';

mongoose.connect(DBCONNECTION_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(()=>{
        app.listen(PORT, ()=>{
        console.log(`Successfully connected to the DB and the server listens at port ${PORT}`);
    })
})
.catch((error)=>{
        console.log(error.message);
    });

