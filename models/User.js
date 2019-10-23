/* USER MODELS
    1. Create a new user object
    2. Create Register function for new user
        a. Validate
*/

let User = (data) => {
    this.data = data;
};

// Prototype makes method available to all user objects. Including method in object creates a copy for each object.
User.prototype.register = () => {
    // 1. Validation
};

module.exports = User;