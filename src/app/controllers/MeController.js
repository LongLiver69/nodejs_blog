const { mutipleMongooseToObject } = require('../../until/mongoose');
const Account = require('../models/Account');

class MeController{

    storedCourses(req, res, next) {
        Account.find({})
            .then(accounts => res.render('me/stored-courses', {
                accounts: mutipleMongooseToObject(accounts)
            }))
            .catch(next);

    }


}

module.exports = new MeController;

