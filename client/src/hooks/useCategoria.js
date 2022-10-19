import { useState, useEffect } from 'react';
import { deleteCategoriaRequest, getCategoriasRequest } from '../api/categoria.api';

export const useCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const getCategorias = async () => {
      const response = await getCategoriasRequest();
      setCategorias(response.data);
    };
    getCategorias();
  }, []);
 const deleteCategoria= async (id) => {
    try {
      const response = await deleteCategoriaRequest(id);
      setCategorias(categoria.filter((categoria) => categoria.idCategoria!== id));
    } catch (error) {
      console.error(error);
    }
  };
  return {
    categorias,deleteCategoria
  };
}
