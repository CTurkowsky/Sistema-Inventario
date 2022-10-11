
import { Router } from 'express';
import { createSalida, getSalidas} from '../controllers/salida.controllers.js';
const router = Router();
router.post('/salida', createSalida);
router.get('/salida', getSalidas);
export default router;