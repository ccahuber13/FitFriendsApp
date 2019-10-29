/* Database file
    NOTE: First file to start is db. We want to establish a connection first for the data before anything else happens.
*/
console.log('db.js started');
const dotenv = require('dotenv');
// Loads in configurations defined in .env file
dotenv.config();
const mongodb = require('mongodb');

// This works for local testing. Not good to set logins in public files. Use env variables.
// const connectionString = 'mongodb+srv://ShoppingListUser:BnAaOw8h7CSiTTJM@cluster0-emfyf.mongodb.net/FitFriendsApp?retryWrites=true&w=majority';

// .connect(connection string, options, CB function)
mongodb.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    // 1. Returns the database object to access db. Export to allow DB access from any file. 
    module.exports = client.db();
    // 2. Start express app only after a connection is established. Exported from app.js
    const app = require('./app');
    // 3. Begin listening for incoming requests.
    app.listen(process.env.PORT);
});