import { FormLayout } from '../../Layout/FormLayout';
import { createSalidaRequest } from '../../../api/salida.api';
import { useProductos, useUsuarios, useAreas } from '../../../hooks';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import Swal from 'sweetalert2';
export const SalidaPage = () => {
  const { areas } = useAreas();
  const { productos } = useProductos();
  const { usuarios } = useUsuarios();
  const formik = useFormik({
    initialValues: {
      fecha: '',
      cantidad: '',
      producto: '',
      usuario: '',
      area: '',
    },
    validationSchema: YUP.object({
      fecha: YUP.date().required('La fecha  es requerida'),
      cantidad: YUP.number()
        .required('La descripcion es requerido')
        .positive('El numero debe ser valido'),
      producto: YUP.string().required('El producto es requerido'),
      usuario: YUP.number().required('El usuario  es requerido'),
      area: YUP.string().required('El area es requerido'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
         
        const response = await createSalidaRequest(values);
        Swal.fire({
          title: 'Success!',
          text: 'Se ha registrado una salida',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
        formik.resetForm();
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: { error },
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    },
  });
  return (
    <>
      <FormLayout title='Registro Salida'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-12 col-sm-7 col-md-6 m-auto'>
              <div className='card border-0 shadow'>
                <div className='card-body'>
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
                    <div className='alert alert-danger'>
                      {formik.errors.fecha}
                    </div>
                  ) : null}
                  <label>Cantidad</label>
                  <input
                    label='Cantidad'
                    name='cantidad'
                    type='number'
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
                    {productos.map((producto) => {
                      if (producto.stock > 0)
                        return (
                          <option
                            key={producto.idProducto}
                            value={producto.idProducto}
                          >
                            {producto.nombreProducto +
                              '-' +
                              producto.nombreCategoria +
                              '-' +
                              producto.nombreMarca}
                          </option>
                        );
                    })}
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
                        {usuario.nombre}
                      </option>
                    ))}
                  </select>
                  {formik.touched.usuario && formik.errors.usuario ? (
                    <div className='alert alert-danger'>
                      {formik.errors.usuario}
                    </div>
                  ) : null}

                  <label>Area</label>
                  <select
                    label='Area'
                    name='area'
                    className='form-control my-4 py-2'
                    value={formik.values.area}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    {areas.map((area) => (
                      <option key={area.idArea} value={area.idArea}>
                        {area.nombreArea}
                      </option>
                    ))}
                  </select>
                  {formik.touched.area && formik.errors.area ? (
                    <div className='alert alert-danger'>
                      {formik.errors.area}
                    </div>
                  ) : null}
                  <div className='text-center my-5'>
                    <button className='btn btn-primary btn-lg' type='submit'>
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
