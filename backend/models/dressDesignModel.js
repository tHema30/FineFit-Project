import mongoose from 'mongoose';

const dressDesignSchema = new mongoose.Schema({
  category: { type: String, required: true },
  // Add other dress design properties as needed
  designImage: {
    public_id: { type: String },
    url: { type: String },
  },
  description:{ type: String, required: true }

  }, { 
    timestamps: true 
  });


const DressDesign = mongoose.model('dressDesigns', dressDesignSchema);

export default DressDesign;
