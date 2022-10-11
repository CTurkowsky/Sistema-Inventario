import { useAreas } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
export const ListArea = () => {
  const { areas, deleteArea} = useAreas();
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
                  <th scope='col'>Nombre Area</th>
                  <th scope='col'>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {areas.map((area) => (
                  <tr key={area.idArea}>
                    <th scope='row'>{area.idArea}</th>
                    <td>{area.nombreArea}</td>
                    <td>
                      <button
                        className='btn btn-warning m-2'
                        onClick={() => navigate(`/edit/${area.idArea}`)}
                      >
                        Editar
                      </button>

                      <button
                        className='btn btn-danger'
                        onClick={() => deleteCategoria(area.idArea)}
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

