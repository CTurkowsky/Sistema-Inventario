import { Router } from 'express';
import {  createProductoSalida, getProductosSalidas } from '../controllers/producto_salida.controllers.js';
const router = Router();
router.post('/productosalida', createProductoSalida);
router.get('/productossalidas', getProductosSalidas);
export default router;