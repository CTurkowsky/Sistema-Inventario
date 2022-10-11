import { useMarcas} from '../../../hooks';
import { useNavigate } from 'react-router-dom';
export const ListMarca = () => {
  const { marcas, deleteMarcas} = useMarcas();
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
                  <th scope='col'>Nombre Marca</th>
                  <th scope='col'>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {marcas.map((marca) => (
                  <tr key={marca.idMarca}>
                    <th scope='row'>{marca.idMarca}</th>
                    <td>{marca.nombreMarca}</td>
                    <td>
                      <button
                        className='btn btn-warning m-2'
                        onClick={() => navigate(`/edit/${marca.idMarca}`)}
                      >
                        Editar
                      </button>

                      <button
                        className='btn btn-danger'
                        onClick={() => deleteMarcas(marca.idMarca)}
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

