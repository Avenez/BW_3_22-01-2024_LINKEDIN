import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Pencil, InfoSquareFill, Plus } from "react-bootstrap-icons";

const ModalProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="white"
        onClick={handleShow}
        className="mt-5 rounded-circle"
        onMouseOver={(e) => (e.target.style.backgroundColor = "#ebebeb")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
      >
        <Pencil className="fs-4" style={{ color: "#5e5e5e" }}></Pencil>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-1">
          <p className="fs-6 mt-0 text-secondary">*Indica che è obbligatorio</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-secondary">Nome*</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" autoFocus required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cognome*</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" autoFocus required />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome aggiuntivo</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" autoFocus />
            </Form.Group>
            <p className="pt-2 mb-2">Pronuncia del nome</p>
            <p>
              <InfoSquareFill /> Può essere aggiunta solo usando la nostra app per dispositivi mobili
            </p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Inserisci pronomi personalizzati</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" autoFocus />
            </Form.Group>
            <p>Indica i pronomi di genere che vuoi che gli altri usino per riferirsi a te.</p>
            <p>
              Scopri di più sui{" "}
              <a href="" style={{ textDecoration: "none", fontWeight: "bold", color: "#0a66c2" }}>
                pronomi di genere.
              </a>
            </p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sommario*</Form.Label>
              <Form.Control type="text" placeholder="" className="border border-dark" autoFocus required />
            </Form.Group>
            <h4>Posizione attuale</h4>
            <Form.Group controlId="exampleForm.SelectCustom" className="mb-3">
              <Form.Label>Posizione lavorativa*</Form.Label>
              <Form.Select custom required className="border border-dark">
                <option>Elemento 1</option>
                <option>Elemento 2</option>
                <option>Elemento 3</option>
              </Form.Select>
            </Form.Group>
            <div className="mb-4" style={{ fontWeight: "bold" }}>
              <a href="" style={{ textDecoration: "none" }}>
                <Plus />
                Aggiungi una nuova posizione lavorativa
              </a>
            </div>
            <Form.Check type="checkbox" id="custom-checkbox" label="Mostra l'azienda attuale nella mia presentazione" />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Settore*</Form.Label>
              <Form.Control type="text" placeholder="" autoFocus required />
            </Form.Group>
            <p>
              Scopri di più sulle{" "}
              <a href="" style={{ textDecoration: "none", fontWeight: "bold" }}>
                opzioni relative al settore
              </a>
            </p>
          </Form>
          <h4>Formazione</h4>
          <Form.Group controlId="exampleForm.SelectCustom" className="mb-3">
            <Form.Label>Formazione*</Form.Label>
            <Form.Select custom required>
              <option>Elemento 1</option>
              <option>Elemento 2</option>
              <option>Elemento 3</option>
            </Form.Select>
          </Form.Group>
          <div className="mb-4" style={{ fontWeight: "bold" }}>
            <a href="" style={{ textDecoration: "none" }}>
              <Plus />
              Aggiungi un nuovo grado di formazione
            </a>
          </div>
          <Form.Check type="checkbox" id="custom-checkbox" label="Mostra la formazione nella mia presentazione" />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Settore*</Form.Label>
            <Form.Control type="text" placeholder="" autoFocus required />
          </Form.Group>
          <h4>Località</h4>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Paese/Area geografica*</Form.Label>
            <Form.Control type="text" placeholder="" autoFocus required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>CAP</Form.Label>
            <Form.Control type="text" placeholder="" autoFocus />
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom" className="mb-4">
            <Form.Label>Città*</Form.Label>
            <Form.Select custom required>
              <option>Elemento 1</option>
              <option>Elemento 2</option>
              <option>Elemento 3</option>
            </Form.Select>
          </Form.Group>
          <p className="fs-5">Informazioni di contatto</p>
          <p>Aggiungi o modifica il tuo profilo URL, indirizzo email e altro</p>
          <div style={{ fontWeight: "bold" }}>
            <a href="" style={{ textDecoration: "none", backgroundColor: "#0a66c2" }}>
              Modifica le informazioni di contatto
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "#0a66c2" }} onClick={handleClose} className="rounded-pill px-3">
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalProfile;
