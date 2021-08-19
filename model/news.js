const mongoose = require("mongoose")
const alish = mongoose.Schema;
const bibhav = new alish({
    image: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
})
module.exports = mongoose.model("news", bibhav)