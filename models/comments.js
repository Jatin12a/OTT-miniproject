const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:5,
        required:true
    },
    comment:{
        type:String,
        trin:true,

    }
})

const review = mongoose.model('Comment',commentSchema);

module.exports = review;