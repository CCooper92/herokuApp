const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express() //doesn't have to be server
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use("/api/",(_,res)=> {
    res.json({data:"API is accounted for"}) //API you want to use will go here so people can use
})

app.listen(port,()=> {
    console.log(`Server is alive on port ${port}`)
})


// console.log("Its alive!!!!")
// console.log(__dirname)//directory where index file lives
// console.log(__filename)//gives us file name
// console.log(process.env.USER)//
// console.log(process.env.PORT)
// console.log(process.env.FOOD)
// console.log(process.env.GREET)
// console.log(process.env.REALLY)
