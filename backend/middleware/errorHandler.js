const errorHandler = (err, req, res) => {
    console.log(err.message)
    console.log("hi")
    const status = res.statusCode ? res.statusCode : 500 //server error

    res.status(status)

    res.json({ message: err.message })
}

module.exports = errorHandler
