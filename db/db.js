const firebase = require('firebase');
const firebaseConfig = require('../config/config');

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection('Users');
const WorkExperience = db.collection('WorkExperience');

exports.User = User;
exports.WorkExperience = WorkExperience;
