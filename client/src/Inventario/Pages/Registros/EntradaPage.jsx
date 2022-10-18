import { EntradaProducto } from './EntradaProducto';
import { EntradaRegistro } from './EntradaRegistro';

export const EntradaPage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-sm-7 col-md-6 m-auto'>
          <EntradaRegistro />
        </div>

      </div>
    </div>
  );
};
