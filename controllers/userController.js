/* USER CONTROLLER
    User actions:
        a. Login
        b. Logout
        c. Register
        d. Go to personal Homepage
 */


const User = require('../models/User');


// Alternative export to module.exports
exports.login = () => {

};

exports.logout = () => {

};

// When a new user registers
exports.register = (req, res) => {
    // 1. Create new user obj
    let user = new User(req.body);
    user.register();
    res.send('Register');
};

exports.home = (req, res) => {
    res.render('home-guest');
};