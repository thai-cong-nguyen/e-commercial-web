
const Course = require('../model/Course');

class homeController {

    // [GET] /home || /
    home(req, res, next) {
        Course.find({})
            .then(courses => res.render('home', {
                tittle: 'Home Page',
            }))
            .catch(next);
    }
}

module.exports = new homeController();