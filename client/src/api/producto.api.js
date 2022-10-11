import axios from 'axios';
export const getProductosRequest= async () =>
  await axios.get('http://localhost:5000/producto');
export const createProductoRequest = async (producto) =>
  await axios.post('http://localhost:5000/producto', producto);
export const deleteProductoRequest = async (id) =>
  await axios.delete(`http://localhost:5000/producto/${id}`);
  export const updateProductoRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, newFields);