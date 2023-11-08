import viewNotice from '../dbServices/viewNotice.js';
import postNotice from '../dbServices/postNotice.js';
import noticeSchema from '../model/noticeModel.js';
import deleteNotice from '../dbServices/deleteNotice.js';

export default class noticeController{
    static async getAllNotices(req,res){
        try{
            const notices = await noticeSchema.find();
            if(!notices){
                throw new Error("No notices found");
                
            }
            res.json(notices);
        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message});
        }
    }
    static async getNotice(req,res){
        try{
            const noticeId = req.params.noticeId;
            const notice = await viewNotice(noticeId);
            if(!notice){
                throw new Error("Notice not found");
            }
            res.json(notice);
        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message});
        }
    }
    static async postNotice(req,res){
        try{
            const noticeId = req.params.noticeId ?? "1";
            const notice_title = req.body.notice_title;
            const notice_description = req.body.notice_description;
            const notice_date = req.body.notice_date;
            const notice_picture = req.body.notice_picture;
            const notice_type = req.body.notice_type;
            const result = await postNotice(noticeId, notice_title, notice_description, notice_date, notice_picture, notice_type);
            res.json(result);
        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message});
        }
    }
    static async deleteNotice(){
        try{
            const noticeId = req.params.noticeId;
            const result = await deleteNotice(noticeId);    
        }
        catch(err){
            console.log(err);
            res.status(500).json({error: err.message});
        }
    }
}
