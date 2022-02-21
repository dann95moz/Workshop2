import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Counter } from './Counter';
import { Form } from "react-bootstrap";

const Page2 = ({
    id,
    nombre,
    descripcion,
    precio,
    dcto,
    dctoPor,
    imagen
}) => {

    const [showModal, setShow] = useState(false);


    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);



    return (

        <>

            <div
                className="d-flex align-items-center justify-content-center"
            >
                <img onClick={handleShow} />

            </div>

            <Modal show={showModal} onHide={handleClose}>

                <Modal.Header closeButton>

                </Modal.Header>

                <Modal.Body>
                    <div>
                        <img src={imagen} />
                        <h2>{nombre}</h2>
                        <ul>
                            <li>{precio}</li>
                        </ul>
                        <p>Precios con IVA incluido</p>
                        <p>{descripcion}</p>
                    </div>
                    <div>
                        <span><b>Selecciona la madurez que deseas</b></span>
                        <Form.Select aria-label="Default select example">
                            <option>Por elegir</option>
                            <option value="1">Maduro (Para hoy)</option>
                            <option value="2">Normal (3-5 días)</option>
                            <option value="3">Verde (7 días)</option>
                        </Form.Select>
                        <div>
                            <Counter />
                            <Button as="Link" to={`/detalle/${id}`} variant="secondary" onClick={handleClose}>
                                Añadir
                            </Button>
                        </div>
                    </div>
                </Modal.Body>



            </Modal>

        </>

    );

}

export default Page2