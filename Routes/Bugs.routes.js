const {Router} = require('express');
const { model } = require('mongoose');
const BugsRouter = Router( );

const {BugsModel} = require('../Models/Bugs.model');

BugsRouter.get('/', async (req,res)=>{
    const {category} = req.query;
    try {
        const AllBugs = await BugsModel.find({category});
        res.send(AllBugs)
    } catch (error) {
        res.status(400).send({"message" : "Oops!! Something Went Wrong!!"})
    }

});


BugsRouter.post('/createbug', async (req,res) =>{
    const {bug,category,userID} = req.body;
    try {
        const NewBug = new BugsModel({bug,category,userID});
        await NewBug.save( );
        res.send({"message" : "New Bug Added Successfully"})
    } catch (error) {
        res.status(400).send({"message" : "Opps! Error In Adding Bug"})
    }

})


module.exports =  {
    BugsRouter
}