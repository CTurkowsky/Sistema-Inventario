import { Router } from 'express';
import { createMarca, getMarcas } from '../controllers/marca.controllers.js';
const router = Router();
router.post('/marca', createMarca);
router.get('/marca', getMarcas);
export default router;