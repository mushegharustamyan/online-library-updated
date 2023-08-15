require("dotenv").config()
const express = require("express")
const connectionInit = require("./db/configs")
const sequelize = require("./db/sequelize")

const app = express()

const port = process.env.PORT

app.listen(port , async () => {
    console.log(`listen ${port}`)
    try{
        await connectionInit()
        await sequelize.sync({alter: false , force: true})  
    }catch(e) {
        console.log(e)
    }
})