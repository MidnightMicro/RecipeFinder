const express = require('express');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');

app.use(cors())

app.get('/', (re,res)=> {
    return res.sendFile(__dirname + '/src/App.js')
})

app.listen(3000, () =>{
    console.log("listening");
})