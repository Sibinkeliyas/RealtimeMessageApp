const loginModel = require('../model/login')

exports.register = (req, res) => {
    try {
        loginModel.create(req.body).then((data) => {
            res.status(200).send(data)
        })
    } catch (err) {

    }
}

exports.login = (req, res) => {
    try {
        loginModel.findOne({email : req.body.email}).then((data) => {
            if (data.password === req.body.password) {
                res.status(200).send(data)
            } else {
                res.status(401).send("incorrect password")
            }
        }).catch((e) => {
            res.status(401).send("incorrect email")
        })
    } catch (err) {
            res.status(401).send(err)
    }
}