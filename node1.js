const fs = require("fs")
let text = fs.readFileSync("sachin.txt","utf-8")
text = text.replace("sachin","shweta" )
console.log("the content of that file is :")
console.log(text)

console.log("creating a new file ")
fs.writeFileSync("shweta.txt",text)