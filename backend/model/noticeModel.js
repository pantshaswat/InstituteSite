import mongoose from 'mongoose';

const noticeModel = new mongoose.Schema ({
    notice_id:{
        type: String,
        unique: true
    },
    notice_title:{
        type: String,
        required: true,
    },
    notice_description:{
        type: String,
        required: true,
    },
    notice_date:{
        type: Date,
        required: true,
        default: Date.now
    },
    notice_picture:{
        type: String,
        
    },
    notice_type:{
        type: String,
        default: "General"
    },
  
})

const noticeSchema = mongoose.model('Notice',noticeModel);
export default noticeSchema;