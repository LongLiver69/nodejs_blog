const { mongooseToObject } = require('../../until/mongoose');
const Account = require('../models/Account');

class CourseController{

    show(req, res, next) {
        Account.findOne({ slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', {course: mongooseToObject(course)});
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create')
    }

    store(req, res, next) {
        const account = new Account(req.body);
        account.save()
            .then(() => res.redirect('/'))
            .catch(err => {}); 
    }

}


module.exports = new CourseController;
