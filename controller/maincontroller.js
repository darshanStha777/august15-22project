const bibhav = require("../model/contact")
const darshan = require("../model/news")
const path = require("path")
const fs = require('fs')


exports.indexpage = (req, res, next) => {
    darshan.find({})
        .then(newsdata => {
            res.render("default/index.ejs", {
                newsdata
            })

        })
}
exports.admindashboard = (req, res, next) => {
    res.render("admin/dashboard.ejs")
}
exports.newspage = (req, res, next) => {
    res.render("default/newpage.ejs")
}
exports.aboutpage = (req, res, next) => {
    res.render("default/about.ejs")
}
exports.contactpage = (req, res, next) => {
    res.render("default/contact.ejs")
}

exports.adminviewpage = (req, res, next) => {

    bibhav.find({})
        .then(contactdata => {
            console.log(contactdata)
            res.render("admin/viewdashboard.ejs", {
                contactdata
            })
        })
}

exports.getcontactdata = (req, res, next) => {
    bibhav.create({
        ...req.body
    }).then(aa => {
        console.log("database create")
    }).catch(err => {
        console.log("databae not create")
    })
    res.redirect('/')
}
exports.adminnews = (req, res, next) => {
    darshan.find({})
        .then(newsdatas => {
            res.render("admin/addnews.ejs", {
                newsdatas
            })
        })

}
exports.storenewsdata = (req, res) => {
    console.log(req)
    const { image } = req.files
    const uploadpath = path.resolve(__dirname, '..', 'public/image/news', image.name)
    image.mv(uploadpath, (error) => {
        darshan.create({
                ...req.body,
                image: `/news/${image.name}`,
            }).then(news => {
                darshan.find({})
                    .then(newsdatas => {
                        res.render("admin/addnews.ejs", {
                            newsdatas
                        })
                    })
            })
            .catch(err => {
                console.log(err)
            })
    })

}
exports.logindata = (req, res, next) => {
    alish.create({
        ...req.body
    }).then(aa => {
        console.log("news create")
    }).catch(err => {
        console.log("news not create")
    })
    res.redirect("/admin")
}