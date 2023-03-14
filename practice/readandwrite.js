//how to read and write file (access file system fs module)

//read a file

const fs = require('fs')

    fs.readFile('calc.js','utf8',function(err,data){
        console.log(data)
    }) 


//write in a file

const fs1= require('fs')

fs1.writeFile('calc.js','console.log("done")',function(err){

    console.log("written")
})

//delete a file
const fs2 = require('fs')
fs2.unlink('todelete.js',function(err){
    console.log("deleted")
})




