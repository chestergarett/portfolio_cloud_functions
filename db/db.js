const firebase = require('firebase');
const firebaseConfig = require('../config/config');

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection('Users');
const WorkExperience = db.collection('WorkExperience');
const Education = db.collection('Education');
const Licenses = db.collection('Licenses')

exports.User = User;
exports.WorkExperience = WorkExperience;
exports.Education = Education;
exports.Licenses = Licenses;
