const express = require('express');
const workExperience = require('../routes/workExperience');

module.exports = function(app){
    app.use(express.json());
    app.use('/api/workExperience',workExperience)
}
