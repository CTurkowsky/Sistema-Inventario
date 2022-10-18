import { FormLayout } from '../../Layout/FormLayout';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as YUP from 'yup';
import { createEntradaRequest } from '../../../api/entrada.api';
import { useUsuarios } from '../../../hooks';
import Swal from 'sweetalert2';
import { EntradaProducto } from './EntradaProducto';

export const EntradaRegistro = () => {
  const { usuarios } = useUsuarios();
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      fecha: '',
      usuarioEntrada: '',
    },
    validationSchema: YUP.object({
      fecha: YUP.date().required('La fecha  es requerida'),
      usuarioEntrada: YUP.string()
        .required('El usuario es requerido')
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await createEntradaRequest(values.fecha, values.usuarioEntrada);
        Swal.fire({
          title: 'Success!',
          text: 'Se ha registrado una categoria',
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
      <FormLayout title='Registrar Entrada'>
        <form onSubmit={formik.handleSubmit}>
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
            <div className='alert alert-danger'>{formik.errors.fecha}</div>
          ) : null}
          <label>Usuario</label>
          <select
            label='Usuario'
            name='usuarioEntrada'
            className='form-control my-4 py-2'
            value={formik.values.usuarioEntrada}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {usuarios.map((usuario) => 
              <option key={usuario.idUsuario} value={usuario.idUsuario}>
                {usuario.nombre +
                  ' ' +
                  usuario.apellidoPaterno +
                  ' ' +
                  usuario.apellidoMaterno}
              </option>
            )}
          </select>
          {formik.touched.usuarioEntrada && formik.errors.usuarioEntrada ? (
            <div className='alert alert-danger'>
              {formik.errors.usuarioEntrada}
            </div>
          ) : null}


          <div className='text-center my-5'>
            <button className='btn btn-primary btn-lg' type='submit' >
              Registrar
            </button>
          </div>
        </form>
      <EntradaProducto  />
      </FormLayout>
    </>
  );
};
