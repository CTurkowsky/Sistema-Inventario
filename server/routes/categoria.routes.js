import { Router } from 'express';
import { createCategoria, getCategorias } from '../controllers/categoria.controllers.js';
const router = Router();
router.post('/categoria', createCategoria);
router.get('/categoria', getCategorias);
export default router;