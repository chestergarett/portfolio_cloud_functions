const firebase = require('firebase')
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.STORAGE_BUCKET,
    appId: process.env.APP_ID,
    measurementId: "G-D64FKDPCVV"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const User=db.collection('Users');
module.exports = User;