const User = require('../models/user');

exports.getUser = (req, res, next) => {
    User.findById(req.params.id,(err, user)=>{
        if(err) return res.status(500).json({error: err});
        res.render('index',{user});
    });
};
