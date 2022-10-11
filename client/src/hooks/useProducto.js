import { useState, useEffect } from 'react';
import { getProductosRequest, deleteProductoRequest } from '../api/producto.api';

export const useProductos = () => {
  const [productos , setProductos] = useState([]);
  useEffect(() => {
    const getProductos = async () => {
      const response = await getProductosRequest();
      setProductos(response.data);
    };
    getProductos();
  }, [productos]);

   const deleteProducto = async (id) => {
    try {
      const response = await deleteProductoRequest(id);
      setProductos(productos.filter((producto) => producto.idProducto !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return {
    productos, deleteProducto
  };
};

