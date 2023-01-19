const { Router } = require('express');
const UserRouter = Router();
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { UserModel } = require('../Models/User.model');

UserRouter.post('/signup', async (req,res) =>{
    const {email,password} = req.body;

})


module.exports = {
    UserRouter
};