import mongoose from "mongoose";
import bcrypt from 'bcryptjs';


const tailorsProfileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    experience: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});




const tailorsProfile = mongoose.model('tailorsProfile', tailorsProfileSchema);

export {tailorsProfile}