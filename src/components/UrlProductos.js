import { urlProductos } from '../helpers/urls';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Container, Navbar } from 'react-bootstrap'
import { NormalPrice, Ul } from '../styles/Styled';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Geocode from "react-geocode";
import { Link } from 'react-router-dom';
import ModalApp from './ModalApp';
import Detalle from './Detalle';

function UrlProductos() {
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true)

  const getData = () => {
    axios.get(urlProductos)
      .then(response => {
        setData(response.data)
      }).catch(error => {
        console.log(error);
      })
  };
  //AIzaSyA1l17RicjE_GRFAjaajK675WQXDUVtg0M api key
  useEffect(() => {
    getData();
  }, []);
  Geocode.setApiKey("AIzaSyA1l17RicjE_GRFAjaajK675WQXDUVtg0M");
  Geocode.setLanguage("es");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");
  return (
    <div>


      <Splide>
        <SplideSlide>
          <Ul>
            {data.map(item => (
              <Card.Body key={item.id}>
                <Link to='/modal' onClick={handleShow}>
                  <img src={item.imagen} width="200" height="200" />
                </Link>
                <h4>{item.nombre}</h4>
                <h5>{item.precio}</h5>
                <h6>{item.descripcion}</h6>
                <ModalApp />
                <Button variant="success">Agregar</Button>{' '}
              </Card.Body>
            ))}
          </Ul>
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Image 2" />
        </SplideSlide>
      </Splide>

    </div>
  );
}

export default UrlProductos