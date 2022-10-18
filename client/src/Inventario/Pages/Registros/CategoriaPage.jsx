import { FormLayout } from '../../Layout/FormLayout';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import { useCategorias } from '../../../hooks';
import { createCategoriaRequest } from '../../../api/categoria.api';
import Swal from 'sweetalert2';
export const CategoriaPage = () => {
  const { categorias } = useCategorias();

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
      try {
        if (
          categorias.find((categoria) => categoria.nombreCategoria === values.nombreCategoria)
        )
          return Swal.fire({
            title: 'Error!',
            text: 'Categoria ya existe',
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        const response = await createCategoriaRequest(values);
        console.log(values);
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
      <FormLayout title='Registro Categoria'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-12 col-sm-7 col-md-6 m-auto'>
              <div className='card border-0 shadow'>
                <div className='card-body'>
                  <label className='form-floating my-4 p-2'>Categoria</label>
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
