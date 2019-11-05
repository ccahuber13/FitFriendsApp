/* SERVER
    Steps:
    1. Install Node.
    2. Install Express Framework (Routing)
    3. Require express
    4. Call express
    5. Set server to listen on port
    6. Run - node app - to start the server

    EXPRESS:
    1. Set location of views folder
    2. Set template engine for express (EJS, PUG, Handlebars)
    3. Install ejs

    TOOLS:
    1. Install nodemon for instant refresh. in package.json, set "watch": "nodemon appname" under script
*/



console.log('app.js started');
// Require express
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
// call express
const app = express();

// maxAge = 1 day
let sessionOptions = session({
    secret: "Secret Sessions",
    store: new MongoStore({client: }),
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
});

// Import our owner router.js file. When imported the entire file is run immediately and stored in our router variable with export.modules.
const router = require('./router');
const userController = require('./controllers/userController');

app.use(sessionOptions)
// Add user submitted data to request object req.body
app.use(express.urlencoded({extended: false}))
// Tell express to use json data.
app.use(express.json());
// Set express views option where views folder is located. Views are HTML template files.
app.set('views', 'views')
// Set the template viewing engine.
app.set('view engine', 'ejs');
// Set to use folder public
app.use(express.static('public'));

// Tell express app to use our created router
app.use('/', router);

// Exporting the app but not yet listening. Start the app in DB file only after connection is established.
module.exports = app;


