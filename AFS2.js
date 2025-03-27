var fs = require("fs")
fs.writeFile("test1.txt","Hello! welcome To LJKU",(err)=>{
    if(err){
        console.error(err)
    }else{
        fs.appendFile("test1.txt" , " Hi" , (err)=>{
            if(err){
                console.log(err)
            }else{
                fs.readFile("test1.txt" , "UTF-8" , (err,d) =>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(d)
                    }
                })
            }
        })
    }
})
console.log("completed afs")