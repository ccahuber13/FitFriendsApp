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
    1. Install nodemon for instant refresh. in package.json, set "watch": "nodemon appname" under scripts.
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