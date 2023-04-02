const express= require("express")
const Connect = require("./src/config/db")
require("dotenv").config()
const loginUserRouter= require("./src/routes/userRouter")
const registerUserRouter= require("./src/routes/userRouter")
const app = express()
const cors = require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const port = process.env.PORT

Connect()

app.use(cors())

app.get( '/' ,(req , res) => res.send('hello')) 

app.use("/user" ,loginUserRouter)
app.use("/user" ,registerUserRouter)


app.listen(port , ()=> {
    console.log(`server is running on port ${port}`)})