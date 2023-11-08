import peopleSchema from "../model/peopleModel.js";

async function postPeople(name, role,photo,contact){
try{
    const people = new peopleSchema({
        name, role, photo, contact,
    });
    await people.save();
    return{
        status: "Success",
        message: "People Posted successfully",
        people: people
    }
}catch(err){
    console.log(err);
    throw err;
}

}
export default postPeople;