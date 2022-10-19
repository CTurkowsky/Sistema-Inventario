import { Routes, Route } from 'react-router-dom';
import {
  CategoriaPage,
  SalidaPage,
  EntradaPage,
  ProductoPage,
  MarcaPage,
  AreaPage,
  InicioSesionPage,
  RegistroPage,
} from '../Inventario/Pages/Registros';
import {
  ListProductos,
  ListEntrada,
  ListEntradaProducto,
  ListSalida,
  ListCategoria,
  ListMarca,
  ListArea,
} from '../Inventario/Pages/Listas';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<ProductoPage />} />
      <Route path='/edi/:id' element={<ProductoPage />} />
      <Route path='/list' element={<ListProductos />} />
      <Route path='/categorialist' element={<ListCategoria />} />
      <Route path='/marcalist' element={<ListMarca />} />
      <Route path='/entradalist' element={<ListEntrada />} />
      <Route path='/entradaproductolist' element={<ListEntradaProducto />} />
      <Route path='/arealist' element={<ListArea />} />
      <Route path='/salidalist' element={<ListSalida />} />
      <Route path='/marca' element={<MarcaPage />} />
      <Route path='/categoria' element={<CategoriaPage />} />
      <Route path='/entrada' element={<EntradaPage />} />
      <Route path='/area' element={<AreaPage />} />
      <Route path='/salida' element={<SalidaPage />} />
      <Route path='/login' element={<InicioSesionPage />} />
      <Route path='/registro' element={<RegistroPage />} />
    </Routes>
  );
};
