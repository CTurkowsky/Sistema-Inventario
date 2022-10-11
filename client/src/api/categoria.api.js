import axios from 'axios';
export const getCategoriasRequest = async () =>
  await axios.get('http://localhost:5000/categoria');
export const createCategoriaRequest= async (categoria) =>
  await axios.post('http://localhost:5000/categoria', categoria);

