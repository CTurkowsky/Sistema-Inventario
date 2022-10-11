import {
  Button,
  Grid,
  TextField,
  Alert,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { FormLayout } from '../../Layout/FormLayout';
import { createProductoRequest } from '../../../api/producto.api';
import { useMarcas, useCategorias } from '../../../hooks';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import { useParams } from 'react-router-dom';
export const ProductoPage = () => {
  const { marcas } = useMarcas();
  const { categorias } = useCategorias();

  const params = useParams();

  const formik = useFormik({
    initialValues: {
      nombreProducto: '',
      stock: '',
      fecha: '',
      categoria: '',
      marca: '',
    },
    validationSchema: YUP.object({
      nombreProducto: YUP.string()
        .min(3, 'El nombre tener mas de 3 caracteres')
        .max(20, 'El nombre debe tener maximo  20 caracteres')
        .required('El nombre es requerido'),
      stock: YUP.number()
        .required('El stock es requerido')
        .positive('El stock debe ser positivo'),

      fecha: YUP.date().required('La fecha  es requerida'),

      categoria: YUP.string().required('La categoria es requerida'),
      marca: YUP.string().required('La marca es requerida'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await createProductoRequest(values);
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <FormLayout title='Registro Producto' className='container mt-5 pt-5'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-12 col-sm-7 col-md-6  m-auto '>
              <div className='card border-0 shadow'>
                <div className='card-body'>
                  <label>Nombre</label>
                  <input
                    label='Nombre'
                    type='text'
                    className='form-control my-4 py-2'
                    placeholder='Nombre del prodcuto'
                    name='nombreProducto'
                    value={formik.values.nombreProducto}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.nombreProducto &&
                  formik.errors.nombreProducto ? (
                    <div className='alert alert-danger' role='alert'>
                      {formik.errors.nombreProducto}
                    </div>
                  ) : null}
                  <label>Stock</label>
                  <input
                    label='Stock'
                    type='number'
                    className='form-control my-4 py-2'
                    placeholder='Stock'
                    name='stock'
                    value={formik.values.stock}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.stock && formik.errors.stock ? (
                    <div className='alert alert-danger' role='alert'>
                      {formik.errors.stock}
                    </div>
                  ) : null}
                  <label>Fecha</label>
                  <input
                    type='date'
                    name='fecha'
                    className='form-control my-4 py-2'
                    value={formik.values.fecha}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.fecha && formik.errors.fecha ? (
                    <div className='alert alert-danger' role='alert'>
                      {formik.errors.fecha}
                    </div>
                  ) : null}
                  <label>Categoria</label>
                  <select
                    label='Categoria'
                    name='categoria'
                    className='form-control my-4 py-2'
                    value={formik.values.categoria}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    {categorias.map((categoria) => (
                      <option
                        key={categoria.idCategoria}
                        value={categoria.idCategoria}
                      >
                        {categoria.nombreCategoria}
                      </option>
                    ))}
                  </select>
                  {formik.touched.categoria && formik.errors.categoria ? (
                    <div className='alert alert-danger' role='alert'>
                      {formik.errors.categoria}
                    </div>
                  ) : null}
                  <label>Marca</label>
                  <select
                    label='Marca'
                    name='marca'
                    className='form-control my-4 py-2'
                    value={formik.values.marca}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    {marcas.map((marca) => (
                      <option key={marca.idMarca} value={marca.idMarca}>
                        {marca.nombreMarca}
                      </option>
                    ))}
                  </select>
                  {formik.touched.marca && formik.errors.marca ? (
                    <div className='alert alert-danger' role='alert'>
                      {formik.errors.marca}
                    </div>
                  ) : null}
                  <div className='text-center mt-3'>
                    <button type='submit' className='btn btn-primary btn-lg'>
                      Registrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormLayout>
    </>
  );
};
