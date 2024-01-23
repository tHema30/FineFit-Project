 // Send welcome email

   const nodemailer = asyncHandler(async (req, res) => {
    const sendMail = await transporter.sendMail({
    from: 'tkematharsini03@gmail.com',
    to: 'uthayakumarabiram@gmail.com',
    subject: 'Welcome!',
    text: `Hello ${name}, welcome to our application!`
 })
 .then(() => {
    res.json(newUser);
 })
 .catch((error) => {
    res.status(500).json({ error: error.message });
 });
 });





    export{
        authUser,
        registerUser,
        logoutUser,
        getUserProfile,
        updateUserProfile,
        nodemailer
    };
user controller.js........................


import nodemailer from  'nodemailer' ;


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    port:587,
    auth: {
      user: 'tkematharsini03@gmail.com',
      pass: 'fgxlrdfptzgnzhwz'
    }
  });
  

export default transporter;

nodemailer.model....................