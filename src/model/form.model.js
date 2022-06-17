const mongoose =require("mongoose");

const formSchema =new mongoose.Schema({
    email:{type:String,required:true},
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    address:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

const Form = mongoose.model("form",formSchema);
module.exports = Form