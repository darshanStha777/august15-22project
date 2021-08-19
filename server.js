const express = require("express")
const mongoose = require("mongoose")
const fileUpload = require('express-fileupload')
const router = require("./route/mainroute")
const path = require('path')
const session = require("express-session")
const flush = require("connect-flash")

const app = express();


app.set("view engine", "ejs");
app.set("views", "view")
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload())
app.use(session({
    secret: 'secrer',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}))
app.use(flush())

mongoose.connect("mongodb://localhost/cubicalpractice", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(app => {
    console.log("database connect")
})




app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(5000, () => {
    console.log("server running")

})