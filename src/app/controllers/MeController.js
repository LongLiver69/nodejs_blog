const { mutipleMongooseToObject } = require('../../until/mongoose');
const Account = require('../models/Account');

class MeController{

    storedCourses(req, res, next) {

        Promise.all([Account.find({}), Account.countDocumentsDeleted()])
        .then(([accounts, deletedCount]) => 
            res.render('me/stored-courses', {
                deletedCount,
                accounts: mutipleMongooseToObject(accounts)
            })
        )
        .catch(next);

    }

    trashCourses(req, res, next) {
        Account.findDeleted({})
            .then(accounts => res.render('me/trash-courses', {
                accounts: mutipleMongooseToObject(accounts)
            }))
            .catch(next);
    }


}

module.exports = new MeController;

