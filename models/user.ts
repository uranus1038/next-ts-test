import mongoose , {Schema} from "mongoose";

const userSchema =new Schema(
    {
        name : {
            type : String ,
            required : true 
        } ,
        tel : {
            type : String ,
            required : true 
        } ,
        email : {
            type : String ,
            required : true 
        } ,
        passWord : {
            type : String ,
            required : true 
        } ,
        role : {
            type : String ,
            required : false ,
            default : "user" 
        } 
    } , 
    {timestamps:true}
)
const User = mongoose.models.User || mongoose.model("User" ,userSchema ); 
export default User ;