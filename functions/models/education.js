const Joi = require('joi');

const validate_add = (education) => {
    const schema = Joi.object({
        school: Joi.string().required(),
        course: Joi.string(),
        startDate: {
            month: Joi.number(),
            year: Joi.number()
        },
        endDate: {
            month: Joi.number(),
            year: Joi.number()
        }
    })

    return schema.validate(education, {abortEarly: false});
};

const validate_update = (education) => {
    const schema = Joi.object({
        school: Joi.string(),
        course: Joi.string(),
        startDate: {
            month: Joi.number(),
            year: Joi.number()
        },
        endDate: {
            month: Joi.number(),
            year: Joi.number()
        }
    })

    return schema.validate(education, {abortEarly: false});
}

exports.validate_add = validate_add;
exports.validate_update = validate_update;