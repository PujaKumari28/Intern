const mongoose=require('mongoose');
const order=mongoose.Schema({
    dishId:String,
    userId:String,
    time:String,
    photo: Buffer,
    photoType: String,
    dname:String,
    price:Number,
    quantity:Number,
    paymentType:String,
    states:String,
    user:Object,


})
module.exports=mongoose.model("orders",order)