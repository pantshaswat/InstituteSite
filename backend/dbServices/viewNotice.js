import noticeSchema from '../model/noticeModel.js';

async function viewNotice(noticeId){
    try{
        const notice = await noticeSchema.findOne({notice_id: noticeId});
        if(!notice){
            throw new Error("Notice not found");
        }

        return notice;
    }catch(err){
        console.log(err);
        throw err;
    }
}

export default viewNotice;