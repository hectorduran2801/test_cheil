import React, { useEffect, useState} from 'react';
import Navbar from './Components/Navbar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStairs, faStar } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [hoteles, setHoteles] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const getHoteles = () => {
      fetch('http://localhost:9000/api/hoteles')
      .then(res => res.json())
      .then(res => setHoteles(res))
    }
    getHoteles();
  }, []);

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = hoteles.filter((elemento) => {
      if(elemento.HotelName.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.Categoria.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento;
      }
    });
    setHoteles(resultadoBusqueda);
  }

  return (
    <div className='App'>

      <Navbar brand='Hotel React App' />
      <br></br>
      
      <div className='container'>
        <div className='column'>
          <div className='col-4'>

            <h2>Filtro:</h2>
              <div className='containerInput'>
                <input className='form-control inputBuscar' value={busqueda} placeholder='Nombre del Hotel o Categoria' onChange={handleChange}/>      
              </div>
            

          </div>
          <div className='col-8'>
            <h2>Listado de Hoteles</h2>

              <table className='table table-striped table-hover'>
                <thead>
                  <tr>
                    <th>Foto</th>
                    <th>HotelName</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th>Calificacion</th>
                  </tr>
                </thead>

                <tbody>
                  {hoteles.map(hotel => (
                    <tr key={hotel.HotelID}>
                      <th><img src={hotel.Foto} className='tamaño'/></th>
                      <th>{hotel.HotelName}</th>
                      <th>{hotel.Categoria} <FontAwesomeIcon icon={faStar}/> </th>
                      <th>$ {hotel.Precio} <h5>Por Noche</h5></th>
                      <th>{hotel.Calificacion} <FontAwesomeIcon icon={faStar}/> Por Huespedes</th>
                  </tr>
                  ))}
                </tbody>
              </table>

          </div>
        </div>
      </div>

      </div>
  );
}

export default App;
