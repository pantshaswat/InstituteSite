import mongoose from 'mongoose';

const peopleModel = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true
    },
    photo:{
        type:String,    
    },
    contact:{
        type: [String]
    }
})

const peopleSchema = mongoose.model('People',peopleModel);
export default peopleSchema;