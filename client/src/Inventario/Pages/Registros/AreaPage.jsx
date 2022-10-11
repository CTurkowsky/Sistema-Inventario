import { FormLayout } from '../../Layout/FormLayout';
import { createAreaRequest } from '../../../api/area.api'
import { useFormik } from 'formik';
import * as YUP from 'yup';
export const AreaPage = () => {
  const formik = useFormik({
    initialValues: {
      nombreArea: '',
    },
    validationSchema: YUP.object({
      nombreArea: YUP.string()
        .min(3, 'El nombre tener mas de 3 caracteres')
        .max(20, 'El nombre debe tener maximo  20 caracteres')
        .required('El nombre es requerido'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await createAreaRequest(values);
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
   <>
      <FormLayout title='Registro Area'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-12 col-sm-7 col-md-6 m-auto' >
              <div className='card border-0 shadow'>
                <div className='card-body'>

              <input
                label='Nombre Area'
                type='text'
                placeholder='Nombre Area'
                name='nombreArea'
                className='form-control my-4 py-2'
                value={formik.values.nombreArea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.nombreArea && formik.errors.nombreArea ? (
                <div className='alert alert-danger'>
                  {formik.errors.nombreArea }
                </div>
              ) : null}
              <div className='text-center my-5'>
                <button
                  type='submit'
                  className='btn btn-primary btn-lg'
                >
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
