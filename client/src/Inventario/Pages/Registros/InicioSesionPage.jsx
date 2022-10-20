import { Link as RouterLink } from 'react-router-dom';
import { FormLayout } from '../../Layout/FormLayout';

export const InicioSesionPage = () => {
  return (
    <FormLayout title='Inicio de Sesion'>
      <form>
        <input
          label='Correo'
          type='email'
          placeholder='correo@email.com'
          className='form-control my-4 py-2'
        />
        <input
          label='Contraseña'
          type='password'
          placeholder='********'
          className='form-control my-4 py-2'
        />
        <div>
          <button className='btn btn-primary'>Iniciar Sesion</button>
        </div>
        <RouterLink
          color='inherit'
          to='/registro'
          className='btn btn-primary'
        >
          Crear una cuenta
        </RouterLink>
      </form>
    </FormLayout>
  );
};
