/* SERVER
    Steps:
    Install Node.
    Install Express Framework (Routing)
    Create app.js file for running server - ./app.js
    Require express
    Call express
    Set server to listen on port
    Run - node app - to start the server

    EXPRESS:
    Set location of views folder
    Set template engine for express (EJS, PUG, Handlebars)
    Install ejs
    Set to use URLencoded to add body object to get user data from forms
    Set to use Json to parse the body object data.

    TOOLS:
    Install nodemon for instant refresh. in package.json, set "watch": "nodemon appname" under scripts.
*/
// Require express
const express = require('express');
// call express
const app = express();

// Set express views option where views folder is located. Views are HTML template files.
app.set('views', 'views')
// Set the template viewing engine.
app.set('view engine', 'ejs');
// Set to use folder public
app.use(express.static('public'));

// ROUTE - To root or home page. Render home-guest.ejs
app.get('/', (req, res) => {
    // Render this html template
    res.render('home-guest');
});

app.listen(3000);


/* SERVER - Router
    Keep all created routes in a router file.
    Steps:
    Create ./router.js
*/