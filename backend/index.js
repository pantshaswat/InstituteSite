import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import router from "./routes/appRoute.js";
import connectDb from './dbServices/dbConfig.js';
import { v4 as uuidv4 } from 'uuid';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const port = process.env.port;
const hostName = process.env.host;

import multer from 'multer'
import postNotice from './dbServices/postNotice.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log(file.originalname);
      const splitExtension = file.originalname.lastIndexOf(".");
      const extension = file.originalname.substring(splitExtension);
      console.log(extension);
      cb(null, file.fieldname + '-' + uniqueSuffix + extension);
    }
  })
  
  const upload = multer({ storage: storage })
  app.post("/upload", upload.single("notice_picture"), async (req, res)=>{
    console.log(req.body);
    const {notice_title, notice_description, notice_type, notice_date} = JSON.parse(req.body.text_data);
    console.log(notice_title);
    const notice_picture = req.file.filename;
    try{
    const result = await postNotice(uuidv4(), notice_title, notice_description, notice_date, notice_picture, notice_type);
    console.log("Image uploaded successfully")
            res.json(result);
        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message});
        }
   
})








import path from 'path';



app.use('/uploads', express.static('uploads'));
app.use('/photos',express.static(path.join(__dirname,'photos')));
app.get("/api/images",(req,res)=>{
    res.json({
        "homeImages": [`https://institute-site.vercel.app/photos/group.jpg`,`https://institute-site.vercel.app/photos/gv.jpg`,`https://institute-site.vercel.app/photos/logo.jpg`,`https://institute-site.vercel.app/photos/visit.jpg`,`https://institute-site.vercel.app/photos/wvd.png`],
        
    })
}
)
app.use("/api",router);
app.use("*",(req,res)=>res.status(404).json({error:"Not found"}));



connectDb().then(
    app.listen(port,()=>{
        console.log(`Server started at http://${hostName}:${port}/`);
    })
)



export default app;