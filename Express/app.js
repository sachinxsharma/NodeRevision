//whaat is express 
// ans : express is  a pakcage of node.js it gives of scalibility of our system 
 const express = require("express"); //import express module 
 const app = express();
 const port = 80;
// handling get req 
 app.get("/",(req,res)=>{
    res.send("thsi is my first express app ");
 });
 app.get("/about",(req,res)=>{
    res.send("thsi is my first express app ");
 });
 app.post("/about",(req,res)=>{
    res.send("thsi is a post req about page");
 });
 app.listen(port, ()=>{
    console.log(`this application started succes fully on port ${port}`);
 })