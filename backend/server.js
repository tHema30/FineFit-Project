import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors"
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 7100;
import userRoutes from './routes/userRoutes.js';
import dressDesignRoutes from './routes/dressDesignRoutes.js';
import adminRoute from './routes/adminRoute.js'
// import DressDesign from './models/dressDesignModel.js';


const  mongoString =process.env.DATABASE_URL
const app = express();
mongoose.connect(mongoString)
const database  = mongoose.connection

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
// Dress Design routes
app.use('/api/users', userRoutes);
app.use('/api/designs', dressDesignRoutes )
// Use image routes
app.use('/api/admin', adminRoute );
app.get('/', (req, res) => res.send('Server is ready'));
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

//database connection server 
database.on('error',(error) => {
    console.log(error)
})

database.once('connected',()=>{
    console.log('Database Connected successfully')
})
