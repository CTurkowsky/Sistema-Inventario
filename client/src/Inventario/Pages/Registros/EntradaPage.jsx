import { FormLayout } from '../../Layout/FormLayout';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import { createEntradaRequest } from '../../../api/entrada.api';
import { useProductos, useUsuarios } from '../../../hooks';
export const EntradaPage = () => {
  const { productos } = useProductos();
  const { usuarios } = useUsuarios();
  const formik = useFormik({
    initialValues: {
      fecha: '',
      cantidad: '',
      producto: '',
      usuario: '',
    },
    validationSchema: YUP.object({
      fecha: YUP.date().required('La fecha  es requerida'),

      cantidad: YUP.number()
        .required('La cantidad es requerida')
        .positive('El numero debe ser valido'),
      producto: YUP.string().required('El numero es requerido'),
      usuario: YUP.number().required('El numero de celular es requerido'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await createEntradaRequest(values);
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <FormLayout title='Registrar Entrada'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-12 col-sm-7 col-md-6 m-auto'>
              <div className='card border-0 shadow'>
                <div className='card-body'>
                  <label>Fecha</label>
                  <input
                    label=''
                    type='date'
                    placeholder=''
                    name='fecha'
                    className='form-control my-4 py-2'
                    value={formik.values.fecha}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.fecha && formik.errors.fecha ? (
                    <div className='alert alert-danger'>
                      {formik.errors.fecha}
                    </div>
                  ) : null}
                  <label>Cantidad</label>
                  <input
                    type='number'
                    placeholder='Ingresa Cantidad'
                    name='cantidad'
                    className='form-control my-4 py-2'
                    value={formik.values.cantidad}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.cantidad && formik.errors.cantidad ? (
                    <div className='alert alert-danger'>
                      {formik.errors.cantidad}
                    </div>
                  ) : null}

                  <label>Producto</label>
                  <select
                    label='Producto'
                    name='producto'
                    className='form-control my-4 py-2'
                    value={formik.values.producto}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    {productos.map((producto) => (
                      <option
                        key={producto.idProducto}
                        value={producto.idProducto}
                      >
                        {producto.nombreProducto}
                      </option>
                    ))}
                  </select>
                  {formik.touched.producto && formik.errors.producto ? (
                    <div className='alert alert-danger'>
                      {formik.errors.producto}
                    </div>
                  ) : null}

                  <label>Usuario</label>
                  <select
                    label='Usuario'
                    name='usuario'
                    className='form-control my-4 py-2'
                    value={formik.values.usuario}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    {usuarios.map((usuario) => (
                      <option key={usuario.idUsuario} value={usuario.idUsuario}>
                        {usuario.correo}
                      </option>
                    ))}
                  </select>
                  {formik.touched.usuario && formik.errors.usuario ? (
                    <div className='alert alert-danger'>
                      {formik.errors.usuario}
                    </div>
                  ) : null}
                  <div className='text-center my-5'>
                  <button  className='btn btn-primary btn-lg' type='submit'>Registrar</button>
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
