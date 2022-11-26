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
}


module.exports = new CourseController;
