import { Button, Grid, TextField, Alert } from '@mui/material';
import { FormLayout } from '../../Layout/FormLayout';
import { createMarcaRequest } from '../../../api/marca.api';
import { useFormik } from 'formik';
import * as YUP from 'yup';
export const MarcaPage = () => {
  const formik = useFormik({
    initialValues: {
      nombreMarca: '',
    },
    validationSchema: YUP.object({
      nombreMarca: YUP.string()
        .min(2, 'El nombre tener mas de 2 caracteres')
        .max(20, 'El nombre debe tener maximo  20 caracteres')
        .required('El nombre es requerido'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await createMarcaRequest(values);
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <FormLayout title='Registro Marca'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-12 col-sm-7 col-md-6 m-auto'>
              <div className='card border-0 shadow'>
                <div className='card-body'>
                  <label className='form-floating my-2 p-2'>Marca</label>
                  <input
                    label='Nombre'
                    type='text'
                    placeholder='Nombre Marca'
                    name='nombreMarca'
                    className='form-control my-4 py-2'
                    value={formik.values.nombreMarca}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.nombreMarca && formik.errors.nombreMarca ? (
                    <div className='alert alert-danger'>
                      {formik.errors.nombreMarca}
                    </div>
                  ) : null}
                </div>
                <div>
                  <div className='text-center my-5'>
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
