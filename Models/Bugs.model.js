const mongoose = require("mongoose");

const BugsSchema = mongoose.Schema({
    bug: String,
    category: String,
    userID : String
});

const BugsModel = mongoose.model('Bug', BugsSchema);

module.exports = {
    BugsModel
};