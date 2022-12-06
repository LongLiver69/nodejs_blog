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

    edit(req, res, next) {
        Account.findById(req.params.id)
            .then(account => res.render('courses/edit', {
                account: mongooseToObject(account)
            }))
            .catch(next)
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Account.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /courses/:id
    delete(req, res, next) {
        Account.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroy(req, res, next) {
        Account.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    restore(req, res, next) {
        Account.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Account.delete({_id: {$in: req.body.courseIds}})
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({msg: 'Action is invalid!'});
        }
    }

}


module.exports = new CourseController;
