require("dotenv").config()
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoUrl)
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = connectDB
