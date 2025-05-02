import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name :{
        type:String,
    },
    googleId :{
        type:String,
    }

}, {
  timestamps: true,
  versionKey: false,
});

const User = mongoose.model('User', userSchema);
export default User;