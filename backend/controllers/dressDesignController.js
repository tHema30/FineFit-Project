import cloudinary from '../utils/imagecloudinary.js';
import DressDesign from '../models/dressDesignModel.js'

// Controller for handling dress design upload
const uploadDressDesign = async (req, res) => {
  try {
    const { category } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `FineFitDesigns/${category}`,
    });

    // Respond with the uploaded dress design details
    res.status(201).json({
      public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Controller for creating a new dress design entry
const createDressDesign = async (req, res) => {
  try {
    const {  category, description } = req.body;

    // Use the uploaded dress design details from the previous route
    const result = await cloudinary.uploader.upload(req.file.path,(err,result)=>{
      if(err){console.log(err)}
    });
    console.log(result);

    const dressDesign = new DressDesign({
      category,
      description,
      designImage: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      
    });

    const savedDressDesign = await dressDesign.save();
    // Perform additional actions as needed, e.g., send confirmation email

    res.status(201).json(savedDressDesign);
  } catch (error) {
    console.error(error);
    res.status(500).json(error)
  }
};

export{uploadDressDesign,createDressDesign}