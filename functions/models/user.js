const Joi = require('joi');

const validate_add = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string().min(2).required(),
        about: Joi.string(),
        contactNumber: Joi.string(),
        displayPhoto: Joi.string(),
        permissions:  Joi.array().items(Joi.string().valid('default', 'admin')).required()
    })

    return schema.validate(user, {abortEarly: false});
}

const validate_update = (user) => {
    const schema = Joi.object({
        email: Joi.string(),
        firstName: Joi.string(),
        lastName: Joi.string(),
        about: Joi.string(),
        contactNumber: Joi.string(),
        displayPhoto: Joi.string(),
        permissions:  Joi.array().items(Joi.string().valid('default', 'admin'))
    })

    return schema.validate(user, {abortEarly: false});
}

exports.validate_add = validate_add;
exports.validate_update = validate_update;