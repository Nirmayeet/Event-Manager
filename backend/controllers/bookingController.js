let bookingModel = require("../models/bookingModel"); // . phela dot se ek step piche aya phir ./ se dusre folder mai gaya

let addController = (req , res)=>{

    bookingModel.addBooking(req.body , res ) // majdur hi response bhejega 
}

let getAllBooking = (req , res)=>
{
    bookingModel.getAllBooking(res);
}

let updateBooking = (req , res)=>
{
    bookingModel.updateBooking(req.params.id , req.body , res); //endpoint mai variable a raha hai usko lene ke liye .params.id use kiya us endpoint ka nam kuchbhi ho sakta hai , re.body mai kya edit krna hai voh hai 
}

let deleteBooking = (req , res )=>
{
    bookingModel.deleteBooking(req.params.id , res );
}
module.exports = { addController ,getAllBooking , updateBooking ,deleteBooking};
