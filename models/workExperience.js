const Joi = require('joi');

const validate_add = (experience) => {
    const schema = Joi.object({
        userId: Joi.string().required(),
        company: Joi.string().min(2).required(),
        position: Joi.string().min(5).required(),
        startDate: Joi.date().required(),
        endDate: Joi.date(),
        isCurrentPosition: Joi.boolean(),
        description: Joi.array().items(Joi.string()),
        techStack: Joi.array().items(Joi.string()),
    })

    return schema.validate(experience, {abortEarly: false});
}

const validate_update = (experience) => {
    const schema = Joi.object({
        company: Joi.string().min(2),
        position: Joi.string().min(5),
        startDate: Joi.date(),
        endDate: Joi.date(),
        isCurrentPosition: Joi.boolean(),
        description: Joi.array().items(Joi.string()),
        techStack: Joi.array().items(Joi.string()),
    })

    return schema.validate(experience, {abortEarly: false});
}

exports.validate_add = validate_add;
exports.validate_update = validate_update;