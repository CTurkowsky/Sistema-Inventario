import { Router } from 'express';
import { createArea, getAreas  } from '../controllers/area.controllers.js';
const router = Router();
router.post('/area', createArea);
router.get('/area', getAreas);
export default router;