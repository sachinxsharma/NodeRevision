// asynchronous or non-blocking
//--line by line execution not guaranteed \
//-- callbacks will fire

const fs = require("fs")
fs.readFile("sachin.txt","utf-8",(err,data)=>{
    console.log(err,data);
})
console.log("this is the message ")
