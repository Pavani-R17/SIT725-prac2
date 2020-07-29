const express = require('express')

let app=express()
let app2=express()

app.get('/',function(request,response) {
response.send('Hello World')
})
app.listen(3000)
// starting the server on port//
