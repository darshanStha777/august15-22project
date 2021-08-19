const express = require("express");
const route = express.Router();
const mainController = require("../controller/maincontroller")
const loginController = require("../controller/loginpage")
const middleware = require("../middleware/auth")

route.get('/', mainController.indexpage)
route.get('/dashboard', mainController.admindashboard)
route.get('/about', mainController.aboutpage)
route.get('/contact', mainController.contactpage)
route.get('/news', mainController.newspage)
route.get('/admin', loginController.adminloginpage)
route.get('/viewadmin', middleware.adminloginpage, mainController.adminviewpage)
route.post('/contactdata', mainController.getcontactdata)
route.get("/adminnews", mainController.adminnews)
route.post("/addnews", mainController.storenewsdata)
route.post('/login', loginController.logindata)
module.exports = route