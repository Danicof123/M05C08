const { validationResult } = require("express-validator");


const prefer = (req, res) => {
    const errors = validationResult(req);

    // if(!errors.isEmpty()) res.send(errors.mapped())
    if(!errors.isEmpty()) return res.render('index', {title: "error", errors: errors.mapped()})
    const {name, color, edad, email} = req.body;
    locals = {
        title : name || "Index",
        name, 
        color,
        edad,
        email,
        state: "success"
    }

    res.render('index', locals)
}
const index = (req, res) => {
    res.render('index', {title: "Index"})
}

module.exports = {
    index,
    prefer
}