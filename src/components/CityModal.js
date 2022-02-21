import React, { useState } from "react";

import { Modal, Button, Form } from "react-bootstrap";


function CityModal() {

    const [showModal, setShow] = useState(false);


    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    return (

        <>

            <div

                className="d-flex align-items-center justify-content-center"



            >

                <h5 variant="success" onClick={handleShow}>

                    Ubicación

                </h5>

            </div>

            <Modal show={showModal} onHide={handleClose}>

                <Modal.Header closeButton>

                    <Modal.Title>Dónde quieres recibir tu pedido</Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    <h6></h6><Form.Select aria-label="Default select example">
                        <option>Selecciona la ciudad donde quieres recibir tu pedido</option>
                        <option value="1">Bogotá</option>
                        <option value="2">Medellín</option>
                        <option value="3">Cali</option>
                    </Form.Select></Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>

                        Cerrar

                    </Button>

                    <Button variant="primary" onClick={handleClose}>

                        Guardar

                    </Button>

                </Modal.Footer>

            </Modal>

        </>

    );

}


export default CityModal;