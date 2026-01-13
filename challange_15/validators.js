const express = require('express');
const bodyParser = require('body-parser');

const { body, validationResult } = require('express-validator');

const app = express();
app.use(bodyParser.json()); // read json


const registrationRules = [
    
    body('username')
        .isLength({ min: 5 })
        .withMessage('Username must be at least 5 characters long!'),

    
    body('age')
        .isInt({ min: 18 })
        .withMessage('You must be at least 18 years old to register!')
];



const validateInput = (req, res, next) => {
   
    const errors = validationResult(req);

    
    if (!errors.isEmpty()) {
        console.log("LOG: Invalid data detected! Blocking request.");
        
        return res.status(400).json({
            success: false,
            message: "Input data validation failed",
            errors: errors.array().map(err => err.msg) 
        });
    }

    console.log("LOG: Data is valid. Proceeding to controller!");
    next();
};



const registerController = (req, res) => {
    
    const { username, age } = req.body;
    console.log(`LOG: Saving user ${username}, age ${age} to Database...`);

    res.status(201).json({
        success: true,
        message: "Registration successful!",
        data: { username, age }
    });
};



app.post('/register',
    registrationRules, 
    validateInput,     
    registerController 
);


app.listen(3000, () => {
    console.log('Server is running on port 3000. Try testing the /register API via Postman');
});