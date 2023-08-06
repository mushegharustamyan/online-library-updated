require("dotenv").config()
const express = require("express")
const connectionInit = require("./db/configs")

const app = express()

const port = process.env.PORT

app.listen(port , async () => {
    console.log(`listen ${port}`)
    try{
        await connectionInit()
    }catch(e) {
        console.log(e)
    }
})