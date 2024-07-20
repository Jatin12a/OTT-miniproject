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
<<<<<<< HEAD
    },
=======
    }],
>>>>>>> c4d3249bf13c731e83dba3c30c35a3e00f91135d
    like:[{
        type: mongoose.Schema.Types.ObjectId, ref:"user"}],
    comments:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Comment' 
    }]
    
});

module.exports = mongoose.model('Movie', MovieSchema);
