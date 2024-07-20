const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
       },
    title: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    release_year: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    director_name: {
        type: String
    },
    main_lead_name: {
        type: String
    },
    genre: [{
        type: String
    }],
    video:{
        type:String
    },
    like:[{
        type: mongoose.Schema.Types.ObjectId, ref:"user"}],
    comments:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Comment' 
    }]
    
});

module.exports = mongoose.model('Movie', MovieSchema);
