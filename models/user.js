const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/OTT");
// mongoose.connect("mongodb+srv://gmusti890:Jatinjoker1@@projects.yzesvk2.mongodb.net/?retryWrites=true&w=majority&appName=Projects");

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