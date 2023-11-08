import noticeSchema from '../model/noticeModel.js';

async function postNotice( notice_id, notice_title, notice_description, notice_date, notice_picture, notice_type){
    try{
        const oldNotice = await noticeSchema.findOne({ notice_id});
        if(oldNotice){
            throw new Error("Notice already exists");
        }
        const notice = new noticeSchema({
            notice_id,
            notice_title,
            notice_description,
            notice_date,
            notice_picture,
            notice_type,
        });
        await notice.save();
        return {
            status: "Success",
            message: "Notice posted successfully",
            notice: notice
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}

export default postNotice;