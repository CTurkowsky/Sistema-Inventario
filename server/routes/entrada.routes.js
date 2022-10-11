import { Router } from 'express';
import { createEntrada , getEntradas } from '../controllers/entrada.controllers.js';
const router = Router();
router.post('/entrada', createEntrada);
router.get('/entrada', getEntradas);
export default router;