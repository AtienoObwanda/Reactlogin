const {
    check
} = require('express-validator');
exports.validSign = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),

    check('firstName', 'first name is required').notEmpty()
    .isLength({
        min: 4,
        max: 32
    }).withMessage('name must be between 3 to 32 characters'),

    check('lastName', 'Last Name is required').notEmpty()
    .isLength({
        min: 4,
        max: 32
    }).withMessage('name must be between 3 to 32 characters'),
    
    check('gender', 'gender is required').notEmpty()
    .isLength({
        min: 2,
        max: 32
    }).withMessage('please select your gender'),
   
    check('yearOfBirth', 'Year of Birth is required').notEmpty()
    .isLength({
      min: 4,
        max: 32
 }).withMessage('please select your year of birth'),

    check('country', 'Country is required').notEmpty()
   .isLength({
        min: 4,
        max: 32
    }).withMessage('Please select your country'),
    


    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]

exports.validLogin = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]


exports.forgotPasswordValidator = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Must be a valid email address')
];

exports.resetPasswordValidator = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .withMessage('Password must be at least  6 characters long')
];