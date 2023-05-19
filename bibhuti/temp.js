const express = require('express');

const app = express();

app.listen(3000,()=>{
    console.log('server up on port 3000')
})

app.get('/userlist',(req,res)=>{

})

express.use(json());