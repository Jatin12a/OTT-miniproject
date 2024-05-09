const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/OTT");

const UserSchema = mongoose.Schema({
    name:String,
    username:String,

    email:String,
    age:Number,
    password:String,
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }]
})

module.exports = mongoose.model('user', UserSchema);