import { useCategorias } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
export const ListCategoria= () => {
  const { categorias, deleteCategoria} = useCategorias();
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
                  <th scope='col'>Nombre Categoria</th>
                  <th scope='col'>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {categorias.map((categoria) => (
                  <tr key={categoria.idCategoria}>
                    <th scope='row'>{categoria.idCategoria}</th>
                    <td>{categoria.nombreCategoria}</td>
                    <td>
                      <button
                        className='btn btn-warning m-2'
                        onClick={() => navigate(`/edit/${categoria.idCategoria}`)}
                      >
                        Editar
                      </button>

                      <button
                        className='btn btn-danger'
                        onClick={() => deleteCategoria(categoria.idCategoria)}
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

