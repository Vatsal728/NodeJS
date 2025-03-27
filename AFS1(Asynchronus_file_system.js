// var fs = require("fs")
// fs.writeFileSync("fs.txt","Hello")
// console.log("completed sfs")

var fs = require("fs")
fs.writeFile("fs1.txt","Hi!welcome",(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log("Written")
    }
})
console.log("completed afs")

fs.appendFile("fs1.txt","Hi!welcome to the LJ Vatsal",(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log("Written1")
    }
})
console.log("completed afs1")

fs.rename("fs1.txt","f1.txt",()=>{
    console.log("renamed")
})

fs.unlink("f1.txt" , (err)=>{
    if(err){
        throw err;
    }else{
        console.log("deleted")
    }
})