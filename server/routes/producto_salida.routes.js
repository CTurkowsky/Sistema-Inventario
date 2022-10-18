import { Router } from 'express';
import {  createProductoSalida, getProductoSalida } from '../controllers/producto_salida.controllers.js';
const router = Router();
router.post('/productosalida', createProductoSalida);
router.get('/productosalida', getProductoSalida);
export default router;