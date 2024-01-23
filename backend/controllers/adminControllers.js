import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'
import nodemailer from 'nodemailer';
import { tailorsOrder } from '../models/ordermodel.js'

import { tailorsProfile } from '../models/tailorModel.js';

//getalluse profiles
const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

//get tailors details by id

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const UserById = await User.findById(id);
    res.json(UserById );
  } catch (error) {
    throw new Error(error);
  }
});



  //@desc   Delete user by ID
//route DELETE/api/admin/users/:id
//@access Private (only accessible by admin)


const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  
  if (user) {
    await user.deleteOne();
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

  
  
// all tailors asmin find

const getallTailors = asyncHandler(async (req, res) => {
    try {
        const allTailors = await tailorsProfile.find({});

        res.status(200).send({
            message: "Tailors fetched successfully",
            success: true,
            data: allTailors,
        });
    } catch (error) {
        console.error(error); // Use console.error for errors
        res.status(500).send({
            message: "Error fetching tailors",
            success: false,
            error: error.message, // Send only the error message to the client
        });
    }
});

//get tailors details by id

const gettailorById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findtailors = await tailorsProfile.findById(id);
    res.json(findtailors);
  } catch (error) {
    throw new Error(error);
  }
});

//update tailors

const updateTailor = asyncHandler(async (req, res) => {
  const { name, email, contact, location, experience } = req.body;

  const tailor = await tailorsProfile.findById(req.params.id);

  if (tailor) {
    tailor.name = name || tailor.name;
    tailor.email = email || tailor.email;
    tailor.contact = contact || tailor.contact;
    tailor.location = location || tailor.location;
    tailor.experience = experience || tailor.experience;

    const updatedTailor = await tailor.save();
    res.json('Successfully updated');
  } else {
    res.status(404);
    throw new Error('Tailor not found');
  }
});






// all orders admin get
const getallOrders = asyncHandler(async (req, res) => {
  try {
    const getOrders = await tailorsOrder.find();
    res.json(getOrders);
  } catch (error) {
    throw new Error(error);
  }
});


//get tailors details by id

const getallOrdersById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findOrders = await tailorsOrder.findById(id);
    res.json(findOrders);
  } catch (error) {
    throw new Error(error);
  }
});

  
  //@desc   Delete tailor by ID
//route DELETE/api/admin/users/:id
//@access Private (only accessible by admin)

const deleteTailor = asyncHandler(async (req, res) => {
  const tailor = await tailorsProfile.findById(req.params.id);

  if (tailor) {
    await tailor.deleteOne(); // or tailor.deleteMany() for deleting multiple documents
    res.json({ message: 'Tailor removed' });
  } else {
    res.status(404);
    throw new Error('Tailor not found');
  }
});






export { 
        getallUser,
        getUserById,
        deleteUser,
        getallTailors,
        gettailorById,
        updateTailor,
        deleteTailor,
        getallOrders,
        getallOrdersById  
       };
