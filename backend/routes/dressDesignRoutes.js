import express from 'express';
const router = express.Router()
import { uploadDressDesign,createDressDesign} from '../controllers/dressDesignController.js'

import { upload } from '../utils/multer.js';


// Dress Design routes
router.post('/upload', upload.single('designImage'), uploadDressDesign);
router.post('/dress-designs', upload.single('designImage'), createDressDesign);



export default router;
