const fs= require('fs');

fs.rename('./myFolder/myFile.txt','./myFolder/newFileAsync.txt',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('File renamed successfully !')
})