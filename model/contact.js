const mongoose = require("mongoose")
const alish = mongoose.Schema;
const darshan = new alish({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    phonenumber: {
        type: String
    },
    message: {
        type: String
    }
})

module.exports = mongoose.model("contact", darshan)