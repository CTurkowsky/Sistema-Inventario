import { Router } from 'express';
import { createMarca, deleteMarca, getMarcas } from '../controllers/marca.controllers.js';
const router = Router();
router.post('/marca', createMarca);
router.get('/marca', getMarcas);
router.delete('/marca/:id', deleteMarca);
export default router;