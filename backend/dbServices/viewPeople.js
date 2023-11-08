import peopleSchema from "../model/peopleModel.js";

async function viewAllPeople(){
    try{
        const peoples = await peopleSchema.find();
        if(!peoples){
            throw new Error("No people found");
        }
        return peoples;
    }catch(err){
        console.log(err);
        throw err;
    }
}
export default viewAllPeople;