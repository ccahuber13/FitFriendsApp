/* ROUTER
    List out all URL routes to be used
    Export to main app file
    Create controllers for callback functions


*/
console.log('router.js started');
// To export this file to another file. You can export anything object / array / expression / file.


const express = require('express');
// Use express Router function to create our router.
const router = express.Router();
const userController = require('./controllers/userController');

// ROUTE - Homepage
router.get('/', userController.home);
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;