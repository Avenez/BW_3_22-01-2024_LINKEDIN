import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const ModalExperiences = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currentYear = new Date().getFullYear();

  return (
    <div className="modal show" style={{ display: "block", position: "initial" }}>
      <Button variant="white" onClick={handleShow}>
        <svg
          className="me-3 cursor"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-pencil "
          viewBox="0 0 16 16"
        >
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"></path>
        </svg>
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Modifica Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-1">
          <p className="fs-6 mt-0 ">*Indica che è obbligatorio</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="colorGray">Qualifica*</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" autoFocus required />
            </Form.Group>
            <Form.Label className="colorGray">Tipo di impiego*</Form.Label>
            <Form.Select aria-label="Default select example" className="border border-dark">
              <option>Seleziona</option>
              <option value="1">A tempo pieno</option>
              <option value="2">Part-time</option>
              <option value="1">Autonomo</option>
              <option value="2">Freelance</option>
              <option value="3">A contratto</option>
              <option value="1">Stage</option>
              <option value="2">Apprendistato</option>
              <option value="3">Stagionale</option>
            </Form.Select>
            <Form.Label className="pb-3">
              Scopri di più sui <a href="">tipi di impiego</a>
            </Form.Label>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label className="colorGray">Nome azienda*</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="colorGray">Località</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" />
            </Form.Group>
            <Form.Label className="colorGray">Tipo di impiego*</Form.Label>
            <Form.Select aria-label="Default select example" className="border border-dark">
              <option>Tipo di località</option>
              <option value="1">In sede</option>
              <option value="2">Ibrida</option>
              <option value="1">Da remoto</option>
            </Form.Select>
            <Form.Label className="colorGray"> Scegli un tipo di località es. da remoto</Form.Label>
            <Form.Check type="checkbox" id="custom-checkbox" label="Attualmente ricopro questo ruolo" />

            <Row className="pt-4">
              <Col xs={12} md={6}>
                <Form.Label className="colorGray">Data di inizio*</Form.Label>
                <Form.Select className="border border-dark" custom required>
                  <option>Mese</option>
                  <option value="1">Gennaio</option>
                  <option value="2">Febbraio</option>
                  <option value="3">Marzo</option>
                  <option value="4">Aprile</option>
                  <option value="5">Maggio</option>
                  <option value="6">Giugno</option>
                  <option value="7">Luglio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Settembre</option>
                  <option value="10">Ottobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Divembre</option>
                </Form.Select>
              </Col>
              <Col xs={12} md={6}>
                {" "}
                <Form.Label className="colorGray">Data di inizio*</Form.Label>
                <Form.Select className="border border-dark" custom required>
                  <option>Anno</option>
                  {[...Array(101)].map((_, index) => {
                    const year = currentYear - index;
                    return <option key={year} value={year.toString()}></option>;
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Row className="pt-4">
              <Col xs={12} md={6}>
                <Form.Label className="colorGray">Data di fine*</Form.Label>
                <Form.Select className="border border-dark" custom required>
                  <option>Mese</option>
                  <option>Mese</option>
                  <option value="1">Gennaio</option>
                  <option value="2">Febbraio</option>
                  <option value="3">Marzo</option>
                  <option value="4">Aprile</option>
                  <option value="5">Maggio</option>
                  <option value="6">Giugno</option>
                  <option value="7">Luglio</option>
                  <option value="8">Agosto</option>
                  <option value="9">Settembre</option>
                  <option value="10">Ottobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Divembre</option>
                </Form.Select>
              </Col>
              <Col xs={12} md={6}>
                {" "}
                <Form.Label className="colorGray">Data di fine*</Form.Label>
                <Form.Select className="border border-dark" custom required>
                  <option>Anno</option>
                  {[...Array(101)].map((_, index) => {
                    const year = currentYear - index;
                    return (
                      <option key={year} value={year.toString()}>
                        {year}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>
            </Row>
            <Form.Label className="colorGray mt-3">Decrizione</Form.Label>
            <Form.Group className="border border-dark rounded-2" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className="rounded-pill px-3 " variant="danger">
            Elimina
          </Button>
          <Button style={{ backgroundColor: "#0a66c2" }} onClick={handleClose} className="rounded-pill px-3">
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalExperiences;
