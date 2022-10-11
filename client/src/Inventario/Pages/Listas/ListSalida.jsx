import { useSalida } from '../../../hooks';
import { useNavigate } from 'react-router-dom';
export const ListSalida = () => {
  const { salidas, deleteSalidas } = useSalida();
  const navigate = useNavigate();
  return (
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
                <th scope='col'>Area</th>
                <th scope='col'>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {salidas.map((salida) => (
                <tr key={salida.idSalida}>
                  <th scope='row'>{salida.idSalida}</th>
                  <td>{salida.nombreProducto}</td>
                  <td>{salida.cantidad}</td>
                  <td>{salida.fecha}</td>
                  <td>{salida.nombre}</td>
                  <td>{salida.nombreArea}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
