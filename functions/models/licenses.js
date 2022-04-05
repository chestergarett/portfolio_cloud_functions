const Joi = require('joi');

const validate_add = (licenses) => {
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        organization: Joi.string().min(2).required(),
        displayPhoto: Joi.string(),
        startDate: {
            month: Joi.number(),
            year: Joi.number()
        },
        endDate: {
            month: Joi.number(),
            year: Joi.number()
        },
        hasExpiration: Joi.boolean(),
        userId: Joi.string().required()
    })

    return schema.validate(licenses, {abortEarly: false});
}

const validate_update = (licenses) => {
    const schema = Joi.object({
        name: Joi.string().min(5),
        organization: Joi.string().min(2),
        displayPhoto: Joi.string(),
        startDate: {
            month: Joi.number(),
            year: Joi.number()
        },
        endDate: {
            month: Joi.number(),
            year: Joi.number()
        },
        hasExpiration: Joi.boolean(),
        userId: Joi.string()
    })

    return schema.validate(licenses, {abortEarly: false});
}

exports.validate_add = validate_add;
exports.validate_update = validate_update;

