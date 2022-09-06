
const Product = require('../model/Product');

class SiteController {

    // [GET] /home || /
    home(req, res, next) {
        Product.find({})
            .then(products => res.render('home', {
                tittle: 'Home Page',
            }))
            .catch(next);
    }
}

module.exports = new SiteController();