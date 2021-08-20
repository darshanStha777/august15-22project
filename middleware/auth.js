const logincreate = require("../model/login")

exports.logindata = (req, res, next) => {

    logincreate.create({
        ...req.body
    }).then(abc => {
        logincreate.find({})
            .then(logindata => {
                for (i = 0; i < logindata.length; i++) {
                    abc = logindata[i].loginemail;
                    bcd = logindata[i].loginpassword
                        // console.log(abc)
                        // console.log(bcd)

                }
                realemail = "darshan@gmail.com";
                realpassword = "darshan"

                if (realemail == abc && realpassword == bcd) {
                    res.redirect("/dashboard")
                } else {
                    // console.log(abc)
                    // console.log(bcd)
                    // req.flash('message', 'saved sucessfully')
                    // res.render("admin/login.ejs", {
                    //         message: req.flash("message")
                    //     })
                    res.send("Email or Password Not match Please Try again!")
                        // console.log("not match")
                }
            })
    }).catch(err => {
        console.log("error")
    })


}
exports.adminloginpage = (req, res, next) => {
    res.render("admin/login.ejs", {
        message: req.flash("message")
    })

}