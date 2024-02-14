// const fs=require('fs');
// fs.unlink('./myFolder/myFile.txt',(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('File Deleted Successfully!')
// })

// Above code is for Error message ,we have given wrong file name.


const fs=require('fs');
fs.unlink('./myFolder/newFileAsync.txt',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('File Deleted Successfully!')
})