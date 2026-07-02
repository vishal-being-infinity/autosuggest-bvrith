const express = require('express')

const app = express()

const PORT = 3001;

app.use(express.static("frontend"))

app.listen(PORT, function(){
   console.log("Running successfully on http://localhost:"+ PORT)
});