const { mutipleMongooseToObject } = require('../../until/mongoose');
const Account = require('../models/Account');

class SiteController {

    home(req, res, next) {
        Account.find({})
            .then(accounts => res.render('home', {
                accounts: mutipleMongooseToObject(accounts)
            }))
            .catch(next);

    }

    search(req, res) {
        res.render('search');
    }
}


module.exports = new SiteController;