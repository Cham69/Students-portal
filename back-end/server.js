const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const dotenv = require ('dotenv');
const cors = require ('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

const DBCONNECTION_URL = 'mongodb+srv://ChamakaJ:royalCOLLEGE@studentsportal.tilxsnm.mongodb.net/?retryWrites=true&w=majority';

//Database connection using mongoose
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

