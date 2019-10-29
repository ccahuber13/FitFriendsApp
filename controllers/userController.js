/* USER CONTROLLER
    User actions:
        a. Login
        b. Logout
        c. Register
        d. Go to personal Homepage
 */

console.log('userController.js started');
const User = require('../models/User');


// Alternative export to module.exports
exports.login = (req, res) => {
    let user = new User(req.body)
    // Don't know how long login will take. 
    // Traditional Method: CB Function. Response is sent only after callback runs and determines if login was OK.
        user.login((result) => {
            res.send(result);
        });
    // Modern Approach: Promises
 

};

exports.logout = () => {

};

// When a new user registers
exports.register = (req, res) => {
    // 1. Create new user obj
    let user = new User(req.body);
    console.log(user);
    user.register();
    if (user.errors.length) {
        res.send(user.errors);
        console.log(user.errors);
    } else {
        res.send('No errors');
        console.log('No errors');
        console.log(user);
        console.log(user.data);
    };
};

exports.home = (req, res) => {
    res.render('home-guest');
};