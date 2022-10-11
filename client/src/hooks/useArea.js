import { useState, useEffect } from 'react';
import { getAreasRequest } from '../api/area.api';

export const useAreas = () => {
  const [areas , setAreas] = useState([]);
  useEffect(() => {
    const getAreas = async () => {
      const response = await getAreasRequest();
      setAreas(response.data);
    };
    getAreas();
  }, [areas]);
  return {
    areas,
  };
};

