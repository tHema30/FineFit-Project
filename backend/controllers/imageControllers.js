// controllers/imageController.js
import cloudinary from'../utils/imagecloudinary.js';
import Image from '../models/imageModel.js';

const uploadImage = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const newImage =  Image.create({
            url: result.url,
            public_id: result.public_id
        });

        

        res.status(200).json({
            success: true,
            message: 'Image uploaded successfully',
            image: newImage
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

export{
    uploadImage
};
