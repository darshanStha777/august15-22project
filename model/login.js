const mongoose = require("mongoose")
const manzil = mongoose.Schema;
const sheel = new manzil({
    loginemail: {
        type: String
    },
    loginpassword: {
        type: String
    }
})
module.exports = mongoose.model("login", sheel)