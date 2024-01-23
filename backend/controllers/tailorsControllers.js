import asyncHandler from 'express-async-handler';
import {tailorsProfile } from "../models/tailorModel.js";


//tailors profile details

const tailors = asyncHandler(async (req,res) => {
    const { name, email,contact,location,experience,} = req.body;
    const data = await tailorsProfile.create ({
        name, email,contact,location,experience,
    });
    console.log(data);
    if(data){
        res.status(201).json(data);
    }else{
        res.status(400)
        throw new Error ("Invaild data")
    }
})


  
  export { tailors, };
