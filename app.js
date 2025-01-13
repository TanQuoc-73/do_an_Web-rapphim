const express = require('express');
const connectDB = require('./connectDB/connectDB');
const userController = require('./mvc/controllers/userController');
const user = require('./mvc/models/user');

const app = express();
const port = 3000;  



mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true, useUnifiedTopology: true});
    app.set('view engine', 'ejs');
    
    app.get('/user/:id', userController.getUser);

app.listen(port, () => {
    console.log('Server is running at http://localhost:${port');
});
