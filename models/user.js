const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: (value) => {
                const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return result.test(value);
            },
            // Custom error message
            // This message will be shown if the validation fails
            message: "Please enter a valid email address",
        }
    },
    state: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        default: "",
    },
    locality: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        required: true,
        validator: (value) => {
            // Password must be at least 8 characters long
            return value.length >= 8;
        },
        message: "Password must be at least 8 characters long",
    }
});


// Create a model using the schema
// The model is a constructor function that creates documents based on the schema
// The model is used to interact with the database
// The first argument is the name of the model, and the second argument is the schema
// The name of the model is usually the singular form of the collection name
// For example, if the collection name is "users", the model name should be "User"
const User = mongoose.model('User', userSchema);
// Export the model
// This allows us to use the User model in other files
// For example, we can use it in the routes file to create, read, update, and delete users
module.exports = User;