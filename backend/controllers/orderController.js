import asyncHandler from 'express-async-handler';
import {tailorsOrder } from "../models/ordermodel.js";


//tailors order appoinment

const Order = asyncHandler(async (req,res) => {
    const {Name, Email,contactNumber,sizes,design, material,OrderDetails} = req.body;
    const data = await tailorsOrder.create ({
        Name, Email,contactNumber,sizes,design, material,OrderDetails
    });
    console.log(data);
    if(data){
        res.status(201).json('your order successfully');
    }else{
        res.status(400)
        throw new Error ("Invaild data")
    }
})
export { Order };

