const express = require('express');
const router = express.Router();
const { User } = require('../db/db');
const { validate_add, validate_update } = require('../models/user');

router.get('/', async(req,res)=> {
    const snapshot = await User.get();
    const list = snapshot.docs.map(doc =>({ id: doc.id, ...doc.data() }))
    res.send(list);
})

router.post('/add',async(req,res)=> {
    const data = req.body;
    const { error } = validate_add(data);
    if (error) return res.status(400).send(error.details.map(detail => detail.message));

    await User.add(data);
    res.send({data: 'Successfully added user.'});
})

router.post('/update', async(req,res)=>{
    const id = req.body.id;
    delete req.body.id;
    const data = req.body;
    const { error } = validate_update(data);
    if (error) return res.status(400).send(error.details.map(detail => detail.message));
    
    await User.doc(id).update(data);
    res.send({data: 'Successfully updated user.'});
})

router.post('/delete', async(req,res)=>{
    const id = req.body.id;

    await User.doc(id).delete();
    res.send({data: 'Successfully deleted user.'});
})

module.exports = router;
