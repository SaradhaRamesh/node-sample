var fs = require('fs');//File Server
fs.readFile('input.txt',function(err,data){
    if(err)return console.error(err);
    console.log(data.toString());
});


console.log("Program ended")