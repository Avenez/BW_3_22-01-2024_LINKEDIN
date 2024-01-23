import { Container, Row, Col, ListGroup, Form } from "react-bootstrap";
import { QuestionCircleFill, GearFill, ShieldShaded, CaretDownFill } from "react-bootstrap-icons";

const ProfileFooter = () => {
  return (
    <Container className="my-3" style={{ color: "#666666" }}>
      <Row>
        <Col lg={2}>
          <ListGroup>
            <ListGroup.Item className="bg-transparent border-0 small py-1">Informazioni</ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 small py-1">Linee Guida della community</ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 small py-3">
              Privacy e condizioni <CaretDownFill />
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 small py-1">Informazioni</ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 small py-1">Centro sicurezza</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2}>
          <ListGroup>
            <ListGroup.Item className="bg-transparent border-0 small py-1">Accessibilità</ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 small py-1">Carriera</ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 small py-3">
              Opzioni per gli annunci pubblicitari
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 small py-1">Mobile</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2}>
          <ListGroup>
            <ListGroup.Item className="bg-transparent border-0 small py-1">Talent Solutions</ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 small py-1">Soluzioni di marketing</ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 small py-3">Pubblicità</ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0 small py-1">Piccole Imprese</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} className="ps-0">
          <ListGroup>
            <ListGroup.Item className="bg-transparent border-0  py-1 px-0 ">
              <Row>
                <Col lg={1} className="me-1">
                  <QuestionCircleFill className="fs-5" />
                </Col>
                <Col lg={9} className="pe-0">
                  <span>Domande?</span>
                  <p className="small text-muted ">Visita il nostro Centro assistenza</p>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0  py-1 px-0">
              <Row>
                <Col lg={1} className="me-1">
                  <GearFill className="fs-5" />
                </Col>
                <Col lg={9} className="pe-0 ">
                  <span>Gestisci il tuo account e la tua privacy</span>
                  <p className="small text-muted">Vai alle impostazioni</p>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-0  py-3 px-0">
              <Row>
                <Col lg={1} className="me-1">
                  <ShieldShaded className="fs-5" />
                </Col>
                <Col lg={9} className="pe-0 ">
                  <span>Trasparenza sui contenuti consigliati</span>
                  <p className="small text-muted">Scopri di più sui contenuti consigliati.</p>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2}>
          <p className="small mb-1"> Seleziona lingua</p>
          <Form.Select aria-label="Default select example">
            <option>Italiano-(Italiano) </option>
            <option value="1">English-(Inglese)</option>
            <option value="2">Français-(Francese)</option>

            <option value="3">Espanol-(Spagnolo)</option>
          </Form.Select>
        </Col>
      </Row>
      <div className="small text-muted mt-3"> LinkedIn fake Corporation © </div>
    </Container>
  );
};
export default ProfileFooter;
