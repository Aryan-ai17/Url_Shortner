import { Schema, model } from "mongoose";

const urlSchema = new Schema({
  originalUrl:{
    type:String,
    required:true
  },
  shortCode:{
    type:String,
    required:true,
    unique:true
  },
  clicks:{
    type:Number,
    default:0
  },
  
  shortUrl:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
   
});

export default model("Url", urlSchema);