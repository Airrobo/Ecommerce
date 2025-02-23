const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')


const app = express();
app.use(express.json())             
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));

const cors = require("cors");
app.use(cors()); // Allows cross-origin requests


const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg:"This is Example"})
})

app.listen(PORT,() => {
    console.log("SERVER IS RUNNING ...")
})

//Routes 
app.use('/user',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'))


//connect mongoDB

const URI = process.env.MONGODB_URI;


mongoose.connect(URI,{
    
}).then(()=>{
    console.log("MongoDB Connected")
}).catch(err => {
    console.log(err)
})
