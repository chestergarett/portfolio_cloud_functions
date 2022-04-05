const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore')

initializeApp();
const db = getFirestore();
const User = db.collection('Users');
const WorkExperience = db.collection('WorkExperience');
const Education = db.collection('Education');
const Licenses = db.collection('Licenses');
const Skills = db.collection('Skills');

exports.User = User;
exports.WorkExperience = WorkExperience;
exports.Education = Education;
exports.Licenses = Licenses;
exports.Skills = Skills;
