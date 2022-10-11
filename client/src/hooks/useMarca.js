import { useState, useEffect } from 'react';
import { getMarcasRequest } from '../api/marca.api';

export const useMarcas = () => {
  const [marcas, setMarcas] = useState([]);
  useEffect(() => {
    const getMarcas = async () => {
      const response = await getMarcasRequest();
      setMarcas(response.data);
    };
    getMarcas();
  }, [marcas]);
  return {
    marcas,
  };
};
