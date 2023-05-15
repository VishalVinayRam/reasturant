const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('./models/restuarant')
const app = express();
const router = require('./router/router')

const cors=require("cors");


const dbURI = 'mongodb+srv://Vishal:1@cluster0.2xdto.mongodb.net/?retryWrites=true&w=majority';

const  db = ()=>
{
    mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.error('Failed to connect to the database', err);
    });
}

db();
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json());
app.use(router);




const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
