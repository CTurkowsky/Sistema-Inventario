import { Router } from 'express';

import {
        getProductos,
        getProducto,
        createProducto,
        updateProducto,
        deleteProducto
} from '../controllers/producto.controllers.js'

const router = Router();

//router.get('/producto', getProductos);

router.get('/producto', getProductos);
router.get('/producto/:id', getProducto);

router.post('/producto', createProducto);

router.put('/producto/:id', updateProducto);

router.delete('/producto/:id', deleteProducto);


export default router;