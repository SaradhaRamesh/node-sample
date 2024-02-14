var fs1=require("fs")

const data ="This is new file text"

fs1.writeFileSync('./myFolder/myFile.txt',data,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('File Successfully created')
    }
})