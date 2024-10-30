const express = require('express');
const userController = require('./controllers/userController');
const app = express();

app.use(express.json());

//app.get('/users', userController.getAllUsers);
app.post('/users', userController.createUser);
app.get('/users/:id', userController.getUserById);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

module.exports = app;