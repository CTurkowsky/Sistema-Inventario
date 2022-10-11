import { useEntrada } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
export const ListEntrada = () => {
  const { entradas, deleteEntrada } = useEntrada();
  const navigate = useNavigate();
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className=' col-lg-12 mt-5'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Nombre Prodcuto</th>
                  <th scope='col'>Cantidad</th>
                  <th scope='col'>Fecha</th>
                  <th scope='col'>Usuario</th>
                  <th scope='col'>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {entradas.map((entrada) => (
                  <tr key={entrada.idEntrada}>
                    <th scope='row'>{entrada.idEntrada}</th>
                    <td>{entrada.nombreProducto}</td>
                    <td>{entrada.cantidad}</td>
                    <td>{entrada.fecha}</td>
                    <td>{entrada.nombre}</td>

                    <td>
                      <button
                        className='btn btn-warning m-2'
                        onClick={() => navigate(`/edit/${entrada.idEntrada}`)}
                      >
                        Editar
                      </button>

                      <button
                        className='btn btn-danger'
                        onClick={() => deleteEntrada(entrada.idEntrada)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
