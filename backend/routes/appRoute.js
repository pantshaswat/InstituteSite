import express from 'express';
const router = express.Router();
import noticeController from '../controller/noticeController.js';
import peopleController from '../controller/peopleController.js';


router.route("/").get((req,res)=>{
    res.send("Hello world");
})
router.route("/notices").get(noticeController.getAllNotices);
router.route("/notices/:noticeId").get( noticeController.getNotice);
router.route("/notices/:noticeId").post(noticeController.postNotice);
router.route("/notices/:noticeId").delete(noticeController.deleteNotice);
router.route("/peoples").get(peopleController.getAllPeople);
router.route("/peoples").post(peopleController.postPeople);

export default router;