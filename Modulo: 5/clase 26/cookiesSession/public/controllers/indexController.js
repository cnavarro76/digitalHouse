const {validationResult} = require('express-validator');

module.exports = {
    index: function(req, res) {
        // get all variables from req
        const {name, color, email, age} = req.body;
        const resultValidation = validationResult(req);

        if(!errors.isEmpty()){
            return res.render('index', {
                title: 'El formularios contiene errores',
                errors: resultValidation.errors,
            });
        }

//sent the variables to the view
        res.render('index', { name, color, email, age, title: null });
    },
    color: function(req, res) {
        res.render('color');
    },
};
