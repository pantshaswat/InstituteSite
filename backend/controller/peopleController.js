import postPeople from "../dbServices/postPeople.js";
import viewAllPeople from "../dbServices/viewPeople.js";

export default class peopleController {
    static async getAllPeople(req,res){
        try{
            const people = await viewAllPeople();
            if(!people){
            throw Error("no people found")
            }
            res.json(people);
        }catch(err){
            console.log(err);
            res.status(500).json({error:err.message});
        }
    }

    static async postPeople(req,res){
        try{
            const name = req.body.name;
            const role = req.body.role;
            const photo = req.body.photo;
            const contact = req.body.contact;
            const result = await postPeople(name, role, photo, contact);
            res.json(result);
        }catch(err){
            console.log(err);
            res.status(500).json({error: err.message});
        }
    }
}