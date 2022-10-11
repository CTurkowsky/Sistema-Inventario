import { useProductos } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export const ListProductos = () => {
  const { productos, deleteProducto } = useProductos();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const filteredProductos = () => {
    if (search.length === 0)
      return productos.slice(currentPage, currentPage + 1);

    const filtered = productos.filter(producto =>
      producto.nombreProducto.includes(search)
    );
    return filtered.slice(currentPage, currentPage + 1);
  };

  const nextPage = () => {
    if( productos.filter( producto => producto.nombreProducto.includes( search)).length > currentPage + 1)
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const onSearchChange = ({ target }) => {
    setCurrentPage(0);
    setSearch(target.value);
  };
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className=' col-12 col-sm-7 col-md-6  m-auto mt-4 '>
            <input
              type='text'
              className='mb-2 form-control'
              placeholder='Burcar Producto'
              value={search}
              onChange={onSearchChange}
            />
            <table className='table table-striped  table-bordered table-hover border-0 '>
              <thead className='thead-dark text-center'>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Nombre Prodcuto</th>
                  <th scope='col'>Stock</th>
                  <th scope='col'>Fecha</th>
                  <th scope='col'>Acciones</th>
                </tr>
              </thead>

              <tbody className='text-center'>
                {filteredProductos().map(
                  ({ idProducto, nombreProducto, stock, fecha }) => (
                    <tr key={idProducto}>
                      <th scope='row'>{idProducto}</th>
                      <td>{nombreProducto}</td>
                      <td 
                       className={`table-${stock === 0 ? 'danger' : 'success'}`}
                      style={{ color: stock === 0 ? 'red' : 'none' }}>
                        {stock}
                      </td>
                      <td>{fecha}</td>

                      <td>
                        <button
                          className='btn btn-warning m-2'
                          onClick={() => navigate(`/edit/${idProducto}`)}
                        >
                          Editar
                        </button>

                        <button
                          className='btn btn-danger'
                          onClick={() => deleteProducto(idProducto)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          <div className='d-flex justify-content-center'>
            <nav>
              <ul className='pagination'>
                <li className='page-item'>
                  <a className='page-link' onClick={prevPage}>
                    Anterior
                  </a>
                </li>
                <li className='page-item active'>
                  <a className='page-link'>{currentPage + 1}</a>
                </li>
                <li className='page-item'>
                  <a className='page-link' onClick={nextPage}>
                    Siguiente
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
