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
// Alternately could re-write as ASYNC function
exports.login = (req, res) => {
    let user = new User(req.body)
    // Don't know how long login will take. 
    // Traditional Method: CB Function. Response is sent only after callback runs and determines if login was OK.
    // login returns a promise. What to do if resolves .then() or if it rejects .catch()
        user.login().then((result) => {
            req.session.user = {favColor: 'blue', username: user.data.username}
            res.send(result)
        }).catch((err) => {
            res.send(err);
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

// Called when someone visits / or home page
// Check if Guest or Logged in session data exist
exports.home = (req, res) => {
    // User session object would exist only if a successful login happened.
   if (req.session.user) {
    res.send('Welcome to application');
   } else {
    res.render('home-guest');
   }
};