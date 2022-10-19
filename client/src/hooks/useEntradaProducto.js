import { useState, useEffect } from 'react';
import { deleteEntradaProductoRequest, getEntradaProductoRequest} from '../api/entradaproducto.api';

export const useEntradaProducto= () => {
  const [entradasproductos, setEntradasProductos] = useState([]);
  useEffect(() => {
    const getEntradasProductos= async () => {
      const response = await getEntradaProductoRequest();
      setEntradasProductos(response.data);
    };
    getEntradasProductos();
  }, []);
 const deleteEntradaProducto= async (id) => {
    try {
      const response = await deleteEntradaProductoRequest(id);
      setEntradasProductos(entradasproductos.filter((entradaproducto) => entradaproducto.idEntradaProducto !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return {
    entradasproductos, deleteEntradaProducto
  };
};


