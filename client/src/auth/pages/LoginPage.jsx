import { Link as RouterLink } from 'react-router-dom';
import { FormLayout } from '../../Inventario/Layout/FormLayout';

export const LoginPage = () => {
  return (
    <FormLayout>
      <form>
        <div className='row'>
          <div className='col-12 col-sm-7 col-md-6 m-auto'>
            <div>Iniciar Sesion</div>
            <div className='card border-0 shadow'>
              <div className='card-body'>
                <input
                  label='Correo'
                  type='email'
                  placeholder='correo@email.com'
                  className='form-control my-4 py-2'
                />
              </div>
              <div>
                <input
                  label='Contraseña'
                  type='password'
                  placeholder='********'
                  className='form-control my-4 py-2'
                />
              </div>
              <div>
                <div>
                  <button className='btn btn-primary'>Iniciar Sesion</button>
                </div>
              </div>
              <div>
                <RouterLink color='inherit' to='/auth/register' className='btn btn-primary'>
                  Crear una cuenta
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormLayout>
  );
};
