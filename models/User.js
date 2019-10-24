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

class User {
    
    constructor(data){
        this.data = data;
        this.errors = [];
    };

    register() {
        console.log('register working');
        // 1. Validate user data

        // 2. Only IF there are NO validation err - Save user data to DB
    };

    validate() {
        if (this.data.username == '') {

        }
    };
}

module.exports = User;