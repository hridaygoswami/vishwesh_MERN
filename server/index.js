// import express from 'express'
// import cors from 'cors'
// import path from 'path'
var express = require("express")
var cors = require("cors")
var path = require("path")

var app = express()

app.use(express.static(path.join(__dirname, 'client/dist')))
app.use(cors())


app.get('/api/', (req, res)=>{
    res.send("Hello from backend")
    console.log("Hello from frontend")
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
  });

app.listen(8080, ()=>{console.log("Backend is running")})