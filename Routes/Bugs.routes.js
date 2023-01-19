const {Router} = require('express');
const { model } = require('mongoose');
const BugsRouter = Router( );

const {BugsModel} = require('../Models/Bugs.model');

BugsRouter.get('/', async (req,res)=>{
    const {category} = req.query;
    const {userID} = req.body;
    try {
        const AllBugs = await BugsModel.find({category,userID});
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
});

BugsRouter.delete('/delete/:id', async (req,res) =>{
    const {userID} = req.body;
    const {id} = req.params;
    const Bug = await BugsModel.findOne({_id : id});
    if(userID !== Bug.userID) res.status(400).send({"message" : "Looks like you have not logged in, Please Login"})
    else
    {
        try {
            await BugsModel.findByIdAndDelete({_id : id});
            res.send({"message" : "Bug Deleted Successfully"});
        } catch (error) {
            res.status(400).send({"message" : "Something Went Wrong"});
        }
    }
})


module.exports =  {
    BugsRouter
}