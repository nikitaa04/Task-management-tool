const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({

    name : {
        type : String,
        require : true
    },

    category : {
           type : String ,
           require : true        
    },

    date : {
        type : String
    }

});

const list = mongoose.model('list',listSchema);

module.exports = list;