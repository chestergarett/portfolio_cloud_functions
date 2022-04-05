const Joi = require('joi');

const validate_add = (skills) => {
    const schema = Joi.object({
        skills: Joi.array().items(Joi.string()),
        userId: Joi.string().required() 
    })

    return schema.validate(skills, {abortEarly: false});
}

const validate_update = (skills) => {
    const schema = Joi.object({
        skills: Joi.array().items(Joi.string())
    })

    return schema.validate(skills, {abortEarly: false});
}


exports.validate_add = validate_add;
exports.validate_update = validate_update;
