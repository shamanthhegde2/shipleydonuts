const Contact = require("../models/Contact")
const asyncHandler = require("express-async-handler")
const formPost = asyncHandler(async (req, res) => {
    const { name, emailId, phoneNumber } = req.body
    if (!name || !emailId || !phoneNumber) {
        return res.status(400).json({ message: "incomplete data" })
    }
    //duplicate
    const duplicateContactEmail = await Contact.findOne({ emailId })
        .lean()
        .exec()
    const duplicateContactPhoneNumber = await Contact.findOne({ phoneNumber })
        .lean()
        .exec()
    if (
        duplicateContactEmail.emailId == emailId ||
        duplicateContactPhoneNumber == phoneNumber
    ) {
        return res.status(409).json({ message: "duplicate entry" })
    }
    const contactObject = {
        name,
        emailId,
        phoneNumber
    }
    const createStatus = await Contact.create(contactObject)
    if (!createStatus) {
        return res.status(400).json({ message: "data is not proper" })
    }
    return res.status(201).json({ message: "successfully created" })
})

module.exports = { formPost }
