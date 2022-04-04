const express = require('express');
const user = require('../routes/user');
const workExperience = require('../routes/workExperience');
const education = require('../routes/education');
const licenses = require('../routes/licenses');
const skills = require('../routes/skills');

module.exports = function(app){
    app.use(express.json());
    app.use('/api/user', user);
    app.use('/api/workExperience',workExperience);
    app.use('/api/education', education);
    app.use('/api/licenses', licenses);
    app.use('/api/skills', skills);
}   
