const express = require('express')  // use express by applying express

const app = express()              // access express easily by app variable
app.get('/',function(req,res){     
    res.send("hello world")       // here '/' is home page, res(response) sends or responds with "hello world"
})

// app.get('/bibhuti',function(req,res){  // home page + path 'bibhuti' sends 'hi'
//     res.send('hi')
// })

app.get('/bibhuti',function(req,res){  // homepage + bibhuti path + query(condition) is executed by if statements
    const id = req.query.id;

    if(id === "happy") {
        res.send(`hello bibhuti is ${id}, good.`)
    }
    else if(id == "sad") {
        res.send(`hello bibhuti is ${id}, bad.`)
    }
    else {
        res.send('wrong input')
    }})

app.listen(4001,function(req,res){     // listens to port 4001, checks if server is running from console.log

    console.log("server is running...")
}) 

