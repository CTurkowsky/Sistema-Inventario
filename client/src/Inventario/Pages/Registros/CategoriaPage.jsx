import { Button, Grid, TextField, Alert } from '@mui/material';
import { FormLayout } from '../../Layout/FormLayout';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import { createCategoriaRequest } from '../../../api/categoria.api';
export const CategoriaPage = () => {
  const formik = useFormik({
    initialValues: {
      nombreCategoria: '',
    },
    validationSchema: YUP.object({
      nombreCategoria: YUP.string()
        .min(3, 'El nombre tener mas de 3 caracteres')
        .max(40, 'El nombre debe tener maximo  40 caracteres')
        .required('El nombre es requerido'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await createCategoriaRequest(values);
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <FormLayout title='Registro Categoria'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-12 col-sm-7 col-md-6 m-auto'>
              <div className='card border-0 shadow'>
                <div className='card-body'>
                  <label className='form-floating my-4 p-2'>Marca</label>
                  <input
                    label='Nombre'
                    type='text'
                    placeholder='Nombre Categoria'
                    name='nombreCategoria'
                    className='form-control my-4 py-2'
                    value={formik.values.nombreCategoria}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.nombreCategoria &&
                  formik.errors.nombreCategoria ? (
                    <div className='alert alert-danger'>
                      {formik.errors.nombreCategoria}
                    </div>
                  ) : null}
                </div>
                <div>
                  <div className='text-center'>
                    <button type='submit' className='btn btn-primary my-5'>
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
