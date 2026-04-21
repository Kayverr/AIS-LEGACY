import * as UserModel from "../models/UserModel.js";

export const register = async (req, res) => {
  const {
   firstName,
    lastName,
    dob,
    course,
    address,
    major,
    status,
    email,
    password } = req.body;
  
    try {
        const userProfile = {firstName, lastName, dob, course, address, major, status, email, password};
        const userID = await UserModel.createUser(userProfile, email, password);
        res.status(201).json({ success: true, 
            message:[
                {result: "New user created", userID},
            ]  
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }

};

export const login = async (req, res) => {
    const {email, password} = req.body;

    try{
        const token = await UserModel.login(email, password);
        res.status(200).json({ success: true, 
            message:[
                {result: "Login successful", token},
            ]  
        });
    }catch(e){
        console.log(e);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}