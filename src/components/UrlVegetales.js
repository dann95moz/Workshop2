import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { urlVegetales } from '../helpers/urls';
import { Button, Card, Container, Navbar } from 'react-bootstrap'
import { LocPcart, NormalPrice, Ul } from '../styles/Styled';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Geocode from "react-geocode";
import { Link } from 'react-router-dom';

import Page1 from './Page1';
import ModalApp from './ModalApp';
import CityModal from './CityModal';
import UrlProductos from './UrlProductos';
import Detalle from './Detalle';

function UrlVegetales() {
    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true)

    const getData = () => {
        axios.get(urlVegetales)
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
            <>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">


                            <img
                                alt=""
                                src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1645452658/tiendita/Tiendita_yy8rgl.svg"
                                width="70"
                                height="70"
                                className="d-inline-block align-top"
                            />{' '}

                            <LocPcart   >

                                <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1645454357/tiendita/Icons_a3ydvx.svg" />
                                <CityModal />
                                <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1645456348/tiendita/Line_1_dmtfgc.svg" />
                                <ModalApp />
                            </LocPcart>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
            <center><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1645452328/tiendita/Banner_kmtpmm.svg" /></center>
            <Splide>
                <SplideSlide>
                    <Ul>
                        {data.map(item => (
                            <Card.Body key={item.id}>
                                <img src={item.imagen} width="200" height="200" />
                                <Page1 />
                                <h4>{item.nombre}</h4>
                                <h5 >{item.dcto}</h5>
                                <NormalPrice>{item.precio}</NormalPrice>
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
            <UrlProductos />
        </div>
    );
}
export default UrlVegetales;