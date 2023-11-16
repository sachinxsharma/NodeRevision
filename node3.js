//serving HTML file using Node.js 
//creating a server then fetching a html file 
//creating server with req andd res content type wouuld be html which is a text format 
//end the response 

const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('sachin.html')

const server = http.createServer((req,res)=>{
    res.writeHead(80, {'Content-type':'text/html'});
    res.end(fileContent)
})

server.listen(80,'127.0.0.1',()=>{
    console.log("listeing on port 8000")
})