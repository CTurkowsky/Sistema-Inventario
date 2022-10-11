import { useState, useEffect } from 'react';
import { getCategoriasRequest } from '../api/categoria.api';

export const useCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const getCategorias = async () => {
      const response = await getCategoriasRequest();
      setCategorias(response.data);
    };
    getCategorias();
  }, [categorias]);

  return {
    categorias,
  };
};
