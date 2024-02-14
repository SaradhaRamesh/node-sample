var fs = require('fs');//File Server
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program ended")