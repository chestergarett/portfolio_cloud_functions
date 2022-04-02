const express = require('express');
const router = express.Router();
const { WorkExperience } = require('../db/db');
const validate = require('../models/workExperience');

//routes
router.get('/', async(req,res) => {
    const snapshot = await WorkExperience.get();
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) );
    res.send(list);
});

router.post('/add', async(req,res) => {
    const data = req.body;
    const { error } = validate(data);
    if (error) return res.status(400).send(error.details[0].message);

    await WorkExperience.add(data);
    res.send({data :'Successfully added work experience.'});
})

router.post('/update',async(req,res)=>{
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  const { error } = validate(data);
  if (error) return res.status(400).send(error.details[0].message);
  
  await WorkExperience.doc(id).update(data);
  res.send({data: 'Successfully updated work experience.'});
})

router.post('/delete', async(req,res)=>{
    const id = req.body.id;
    await WorkExperience.doc(id).delete();
    res.send({data: 'Successfully deleted work experience.'});
})

module.exports = router;