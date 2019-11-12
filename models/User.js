/* USER MODELS
    1. Create a new user object
    2. Create Register function for new user
        a. Validate
*/

/* let User = (data) => {
    this.data = data;

};

User.prototype.validate = function() {};

// Prototype makes method available to all user objects. Including method in object creates a copy for each object.
User.prototype.register = function() {
    // 1. Validate user data
    this.validate();
    // 2. Only if no validation errors - Save user data into database
    
}; */
console.log('User.js running');
// Setting the database object and collection users from db.js as usersCollection
const usersCollection = require('../db').db().collection('users');
// Validator package for checking username/password/email.
const validator = require('validator');
// import validator from 'validator;'
const bcrypt = require('bcryptjs');

class User {
    
    constructor(data){
        this.data = data;
        this.errors = [];
    };

    register() {
        console.log('register working');
        // 1. Clean registration data as only text string. Then validate reg meets requirements.
        this.valCleanUp();
        console.log(this.errors);
        this.validate();
        // 2. Only IF there are NO validation err - Save user data to DB
        if (!this.errors.length) {
            // Hash user password
            // Create a salt to base the hash on.
            let salt = bcrypt.genSaltSync(10)
            // Hash the actual password .hashSync(password, salt)
            this.data.password = bcrypt.hashSync(this.data.password, salt);
            // Insert the data object into database
            usersCollection.insertOne(this.data);
        };
    };

    valCleanUp() {
    // 
        if (typeof this.data.username != 'string') {
            this.data.username = '';
        };
        if (typeof this.data.email != 'string') {
            this.data.email = '';
        };
        if (typeof this.data.password != 'string') {
            this.data.password = '';
        };

        // Get rid of unwanted properties in our object. Reset object to properties we want.
        // This prevents users from submitting their own data to the object.
        // .trim removes blank spaces.
        // Passwords should include upper or lower case and spaces if desired.
        this.data = {
            username: this.data.username.trim().toLowerCase(),
            email: this.data.email.trim().toLowerCase(),
            password: this.data.password
        };
    };

    validate() {
    // Validation can be done by useful packages or using regular expressions.
 
        // Validate username: No blank field | Must be only alphanumeric 
        if (this.data.username != '' && !validator.isAlphanumeric(this.data.username)) {
            this.errors.push('Username must contain only letters or numbers.');
        };
        if (this.data.username.length >= 0 && this.data.username.length < 3) {
            this.errors.push('username must be greater than 3 characters');
        };

        if (this.data.username.length > 25) {
            this.errors.push('username cannot be longer than 25 characters.');
        };

        // No blank field | Must be a valid email address using @ symbol
        if (!validator.isEmail(this.data.email)) {
            this.errors.push('You must provide a valid email address.');
        };
        // No blank field | character over and under limit.
        if (this.data.password == '') {
            this.errors.push('You must provide a password');
            console.log('validation 3');
        };

        if (this.data.password.length > 0 && this.data.password.length < 12) {
            this.errors.push('Password must be greater than 12 characters.');
        };

        if (this.data.password.length > 25) {
            this.errors.push('Password cannot be longer than 25 characters.');
        };
    };

    login() {
        return new Promise( (resolve, reject) => {
            // 1. Cleanup login data
            this.valCleanUp();
            // 2. Find user in DB collection then verify username exists and password matches it's record.
            // NOTES - Object is not calling this.data.password so it refers to global obj. Use ES6 arrow function for scoping.
            // Inside of DB find({item to find}, CB Function(error, passed in object data IF TRUE){})
            // Old method. Use promises for new way.
/*             usersCollection.findOne({username: this.data.username}, (err, attemptedUser) => {
                if (attemptedUser && attemptedUser.password == this.data.password) {
                    resolve('CORRECT LOGIN');
                
                } else {
                    reject('Invalid user / password');
                };
            }); */
            usersCollection.findOne({username: this.data.username}).then((attemptedUser) => {
                // .compareSync(Password user entered, The hashed password)
                // If match returns true
                if (attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password)) {
                    resolve('CORRECT LOGIN!!');
                
                } else {
                    reject('Invalid user / password');
                };
            }).catch((err) => {
                reject('Login did not work');
            });
    
        });
    }
}

module.exports = User;