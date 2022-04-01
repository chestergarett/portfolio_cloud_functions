const express = require('express');
const router = express.Router();
const { WorkExperience } = require('../db/db');

//routes
router.get('/', async(req,res) => {
    const snapshot = await WorkExperience.get();
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) );
    res.send(list);
});

module.exports = router;