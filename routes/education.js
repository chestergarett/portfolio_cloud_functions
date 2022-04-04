const express = require('express');
const router = express.Router();
const { Education } = require('../db/db');
const { validate_add, validate_update } = require('../models/education');

//routes
router.get('/', async(req,res)=>{
    const snapshot = await Education.get();
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.send(list);
})

router.post('/add', async(req,res)=>{
    const data = req.body;
    const { error } = validate_add(data);
    if (error) return res.status(400).send(error.details.map(detail => detail.message));

    await Education.add(data);
    res.send({data: 'Education added successfully.'});
})

router.post('/update', async(req,res)=>{
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    const { error } = validate_update(data);
    if (error) return res.status(400).send(error.details.map(detail => detail.message));

    try {
        await Education.doc(id).update(data)
        res.send({data: 'Successfully updated education.'})
    } catch (e) {
        res.status(500).send({data: 'Document not found.'})
    }
})

router.post('/delete', async(req,res)=>{
    const id = req.body.id;

    try {
        await Education.doc(id).delete();
        res.send({data: 'Successfully deleted education.'});
    }catch(e){
        res.status(500).send({data: 'Document not found.'})
    }
})

module.exports = router;
