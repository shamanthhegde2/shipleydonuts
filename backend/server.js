require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = process.env.port || 3500

const root = require("./routes/root")
const formRoute = require("./routes/formRoute")
const connectDB = require("./config/dbconn")
const errorHandler = require("./middleware/errorHandler")

connectDB()

app.use(express.json())

app.use("/", root)
app.use("/form", formRoute)

app.use(errorHandler)
mongoose.connection.on("open", () => {
    console.log("mongodb connection successfull")
    app.listen(port, () => {
        console.log(`server started successfully in ${port}`)
    })
})
