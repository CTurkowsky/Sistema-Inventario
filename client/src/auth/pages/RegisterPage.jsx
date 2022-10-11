import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Link, Button, Grid, TextField, Typography, Alert } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useFormik } from 'formik';
import * as YUP from 'yup';
import { createUsuarioRequest } from '../../api/usuario.api';
export const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      correo: '',
      contrasena: '',
    },
    validationSchema: YUP.object({
      nombre: YUP.string()
        .min(3, 'El nombre tener mas de 3 caracteres')
        .max(20, 'El nombre debe tener maximo  20 caracteres')
        .required('El nombre es requerido'),
      apellidoPaterno: YUP.string()
        .min(3, 'El apellido paterno tener mas de 3 caracteres')
        .max(20, 'El apellido paterno debe tener maximo  20 caracteres'),
      apellidoMaterno: YUP.string()
        .min(3, 'El apellido materno debe tener mas de 3 caracteres')
        .max(20, 'El apellido materno debe tener maximo  20 caracteres')
        .required('El nombre es requerido'),
      correo: YUP.string()
        .email()
        .min(3, 'El corre tener mas de 3 caracteres')
        .max(20, 'El nombre debe tener maximo  20 caracteres')
        .required('El nombre es requerido'),
      contrasena: YUP.string()
        .min(3, 'La contraseña tener mas de 4 caracteres')
        .max(20, 'La contraseña debe tener maximo  12 caracteres')
        .required('La contraseña es requerido'),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await createUsuarioRequest(values);
        formik.resetForm();
        
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <AuthLayout title='Registro'>
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Nombre'
              type='text'
              placeholder='Nombre '
              fullWidth
              name='nombre'
              value={formik.values.nombre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nombre && formik.errors.nombre ? (
              <Alert sx={{ mt: 2 }} severity='error'>
                {formik.errors.nombre}
              </Alert>
            ) : null}
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Apellido Paterno'
              type='text'
              placeholder='Apellido Paterno'
              fullWidth
              name='apellidoPaterno'
              value={formik.values.apellidoPaterno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.apellidoPaterno && formik.errors.apellidoMaterno? (
              <Alert sx={{ mt: 2 }} severity='error'>
                {formik.errors.apellidoPaterno}
              </Alert>
            ) : null}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Apellido Materno'
              type='text'
              placeholder='Apellido Materno'
              fullWidth
              name='apellidoMaterno'
              value={formik.values.apellidoMaterno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.apellidoMaterno && formik.errors.apellidoMaterno ? (
              <Alert sx={{ mt: 2 }} severity='error'>
                {formik.errors.apellidoMaterno}
              </Alert>
            ) : null}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              name='correo'
              placeholder='correo@email.com'
              fullWidth
              value={formik.values.correo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.correo && formik.errors.correo? (
              <Alert sx={{ mt: 2 }} severity='error'>
                {formik.errors.correo}
              </Alert>
            ) : null}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              name='contrasena'
              placeholder='********'
              fullWidth
              value={formik.values.contrasena}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.contrasena && formik.errors.contrasena? (
              <Alert sx={{ mt: 2 }} severity='error'>
                {formik.errors.contrasena}
              </Alert>
            ) : null}
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth type='submit'>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
