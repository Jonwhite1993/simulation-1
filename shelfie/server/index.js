const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive');
require('dotenv').config()


const port = 3005;
app.use(express.json())
massive( process.env.CONNECTION_STRING).then( dbInstance => {app.set('db', dbInstance)});


//Endpoints my dude
app.get('/api/products', ctrl.getAll)
app.post('/api/products', ctrl.addProduct)




app.listen(port, () => console.log(`Listening for ${port}`))