import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";


function ModalApp() {

    const [showModal, setShow] = useState(false);


    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    return (

        <>

            <div

                className="d-flex align-items-center justify-content-center"



            >

                <Button variant="success" onClick={handleShow}>

                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1645457038/tiendita/shopcart_jtgspf.svg" />

                </Button>

            </div>

            <Modal show={showModal} onHide={handleClose}>

                <Modal.Header closeButton>

                    <Modal.Title>Modal heading</Modal.Title>

                </Modal.Header>

                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>

                        Close

                    </Button>

                    <Button variant="primary" onClick={handleClose}>

                        Save Changes

                    </Button>

                </Modal.Footer>

            </Modal>

        </>

    );

}


export default ModalApp;