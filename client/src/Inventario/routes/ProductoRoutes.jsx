import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductoPage, ListProductos } from '../Pages/Registros';
export const ProductoRoutes = () => {
  return (
  <Routes>
    <Route path="/" element= {<ProductoPage/>}/>
    <Route path="/list" element= {<ListPage/>}/>
    <Route path="/*" element= {<Navigate to="/"/>}/>
  </Routes>
  )
}