import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { CaretDownFill, ownFill, Clock } from "react-bootstrap-icons";

const AddPost = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col className="">
        <Row className="postRow">
          <Col xs={1} className="me-2">
            <img
              src="https://media.gqitalia.it/photos/642e9d8bfc2b9ece8567af56/1:1/w_1079,h_1079,c_limit/therock.jpg"
              alt="profileImage"
              className=" rounded rounded-circle postImage"
            />
          </Col>
          <Col>
            <Button variant="outline-secondary" className=" text-start rounded-pill w-100 h-100 " onClick={handleShow}>
              Avvia un post
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="border-0">
                <Modal.Title>
                  <img
                    src="https://media.gqitalia.it/photos/642e9d8bfc2b9ece8567af56/1:1/w_1079,h_1079,c_limit/therock.jpg"
                    alt="profileImage"
                    className=" rounded rounded-circle postImage me-2"
                  />
                  Oleksandr Larionov
                  <CaretDownFill className="ms-2 text-secondary fs-5" />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={7}
                      placeholder="Di cosa vorresti parlare?"
                      className="border-0 "
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="p-1">
                <Clock className="me-2 fs-5" />
                <Button variant="outline-secondary" className="rounded-pill py-1 px-3" onClick={handleClose}>
                  Pubblica
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Col>
    </>
  );
};

export default AddPost;
