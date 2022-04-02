const Joi = require('joi');

const validate = (experience) => {
    const schema = Joi.object({
        company: Joi.string().min(2).required(),
        position: Joi.string().min(5).required(),
        startDate: Joi.date().required(),
        endDate: Joi.date(),
        isCurrentPosition: Joi.boolean(),
        description: Joi.array().items(Joi.string()),
        techStack: Joi.array().items(Joi.string()),
    })

    return schema.validate(experience);
}

module.exports = validate;