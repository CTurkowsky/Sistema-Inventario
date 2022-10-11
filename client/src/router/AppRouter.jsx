import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import {
  CategoriaPage,
  SalidaPage,
  EntradaPage,
  ProductoPage,
  MarcaPage,
  AreaPage,
} from '../Inventario/Pages/Registros';
import {
  ListProductos,
  ListEntrada,
  ListSalida,
  ListCategoria,
  ListMarca,
  ListArea
} from '../Inventario/Pages/Listas';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route path='/*' element={<ProductoPage />} />
      <Route path='/edi/:id' element={<ProductoPage />} />
      <Route path='/list' element={<ListProductos />} />
      <Route path='/categorialist' element={<ListCategoria/>} />
      <Route path='/marcalist' element={<ListMarca/>} />
      <Route path='/entradalist' element={<ListEntrada />} />
      <Route path='/arealist' element={<ListArea/>} />
      <Route path='/salidalist' element={<ListSalida />} />
      <Route path='/marca' element={<MarcaPage />} />
      <Route path='/categoria' element={<CategoriaPage />} />
      <Route path='/entrada' element={<EntradaPage />} />
      <Route path='/area' element={<AreaPage />} />
      <Route path='/salida' element={<SalidaPage />} />
    </Routes>
  );
};
