import noticeSchema from '../model/noticeModel.js';

async function deleteNotice(noticeId){
    try{
        const notice = await noticeSchema.findOne({notice_id: noticeId});
        if(!notice){
            throw new Error("Notice not found");
        }
        await noticeSchema.deleteOne({notice_id: noticeId});
        return {
            status: "Success",
            message: "Notice deleted successfully",
            notice: notice
        }
    }catch(err){
        console.log(err);
        throw err;
    }
}
export default deleteNotice;