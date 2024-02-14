// var fs1=require("fs")
// fs1.mkdir('./myFolder',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Folder Successfully created')
//     }
// })


//this is the file we update.


var fs1=require("fs")

const data ="This is Updated file text"

fs1.writeFileSync('./myFolder/UpdatedFile.txt',data,{flag:'a'},(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('File Successfully created')
    }
})