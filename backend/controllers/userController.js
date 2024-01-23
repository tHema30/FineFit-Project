import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js'
import nodemailer from 'nodemailer';



//@desc   Register a new user
//route POST/api/users/auth
//@access Public


const registerUser = asyncHandler (async (req, res) =>{
const { name, email, password } = req.body;

const userExists = await User.findOne({ email });

if (userExists) {
    res.status(400);
    throw new Error('User already exists');
}

const user = await User.create({
    name,
    email,
    password
});

if (user) {
    generateToken(res, user._id);
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        success:true, 
        message :"welcome"
    });

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL,
          pass: process.env.PASS
        }
      });
      var mailOptions = {
        from : 'tkematharsini03@gmail.com',
        to : user.email ,
        subject : 'Message From  New Registration',
        html : `
        <h5>Hello your are succesfully Registered  <h5/>
        `
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('id sent: ' + info.response);
        }
      });
  }else{
      res.status(400)
      throw new Error ("Invaild data")
  }
}); 

//@desc   Auth user/settoken
//route POST/api/users/auth
//@access Public


const authUser = asyncHandler (async (req, res) =>{
  const { email, password } = req.body;
  
  const user = await User.findOne({ email});
  
  if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
      res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          success:true, 
          message :"Welcome to FineFit"
      });
  } else {
      res.status(401);
      throw new Error('Invalid email or password');
  }
  
  });
//@desc   Get User Profile
//route POST/api/users/profile
//@access Private


const getUserProfile = asyncHandler (async (req, res) =>{
    
  const user = {
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email
  }
      res.status(200).json(user);
      });
  

//@desc   Update User Profile
//route Put/api/users/profile
//@access Public


const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
     user.name = req.body.name || user.name;
     user.email = req.body.email || user.email;

     if (req.body.password) {
      user.password = req.body.password;
     }

     const updatedUser = await user.save();

     res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
     });
  } else {
      res.status(404);
      throw new Error('User not found')
  }

  res.status(200).json({ message:'Update user profile'});
  });


//@desc   Logout user
//route POST/api/users/auth
//@access Public


const logoutUser = asyncHandler (async (req, res) =>{

    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({ message:'User logged out'});
    });




    export{
        registerUser,
        authUser,
        getUserProfile,
        updateUserProfile,
        logoutUser,
     

    };

