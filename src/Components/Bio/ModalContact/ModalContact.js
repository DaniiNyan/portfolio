import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import ModalStyle from "./ModalContact.module.css";

const modalContact = props => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contato
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={ModalStyle.formulario}>
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome" required/>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" required/>
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Mensagem" required/>
          <Form.Text className="text-muted">Obs.: Todos os campos são obrigatórios.</Form.Text>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}
          type="submit" 
          bsPrefix={ModalStyle.botaoContato}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default modalContact;
