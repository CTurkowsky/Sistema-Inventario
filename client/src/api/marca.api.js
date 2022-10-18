import axios from 'axios';
export const getMarcasRequest= async () =>
  await axios.get('http://localhost:5000/marca');
export const createMarcaRequest= async (marca) =>
  await axios.post('http://localhost:5000/marca', marca);
export const deleteMarcaRequest= async (id) =>
  await axios.delete(`http://localhost:5000/marca/${id}`);

