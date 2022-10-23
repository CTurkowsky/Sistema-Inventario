import { Link as RouterLink } from 'react-router-dom';
import { FormLayout } from '../../Layout/FormLayout';

export const InicioSesionPage = () => {
  return (
    <FormLayout titulo='Inicio de Sesion'>
      <form>
        <label>Correo</label>
        <input
          label='Correo'
          type='email'
          placeholder='correo@email.com'
          className='form-control my-4 py-2'
        />

        <label>Contraseña</label>
        <input
          label='Contraseña'
          type='password'
          placeholder='********'
          className='form-control my-4 py-2'
        />

        <div className='d-flex flex-column'>
          <button className='btn btn-primary mb-2'>Iniciar Sesion</button>
          <RouterLink
            color='inherit'
            to='/registro'
            className='btn btn-primary'
          >
            Crear una cuenta
          </RouterLink>
        </div>
      </form>
    </FormLayout>
  );
};
