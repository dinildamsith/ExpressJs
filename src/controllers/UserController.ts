import express, {Request , Response} from "express";
import UserModel from "../models/UserModel";

const UserController = express.Router();


//create User
UserController.post("/user",async (req:Request,res:Response) =>{

    // Get Data Request Body True
    const {username, email,password,phone} = req.body;

    //save to db
    const user = new UserModel();
    user.username = username;
    user.email = email;
    user.password = password;
    user.phone = phone;
    await user.save()

    res.send("User Created")
})

//export
export default UserController;