const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors())
require('./startup/routes')(app);

app.listen(3000, ()=> {
    console.log('Up & running on 3000')
})