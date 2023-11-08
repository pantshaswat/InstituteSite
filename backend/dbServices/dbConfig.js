import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();



const mongo_username = process.env.mongo_username;
const mongo_password = process.env.mongo_password;

const temp = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.jnimfmg.mongodb.net/?retryWrites=true&w=majority`
//const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.uxdpyuw.mongodb.net/?retryWrites=true&w=majority`

async function connectDb(){
    try{
        await mongoose.connect(temp, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("DB connected")
    }
    catch(e){
        console.log(e);
        throw e;
    }
}
export default connectDb;