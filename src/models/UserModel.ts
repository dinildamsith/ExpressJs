import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    email: String,
    phone: String
})


const UserModel = mongoose.model("User",UserSchema);

export default UserModel;