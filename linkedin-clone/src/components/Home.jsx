import { Row, Col, Container } from "react-bootstrap";

import { CaretDownFill, InfoSquareFill } from "react-bootstrap-icons";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <h4>Profilo fetchato</h4>
        </Col>
        <Col md={6}>
          <h4>Post fetchati</h4>
        </Col>
        <Col md={3}>
          <div>
            <div className="bg-white mb-2 py-2 border border-1r rounded ">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 px-2 py-1 fw-semibold">LinkedIn Notizie</p>
                <InfoSquareFill className=" me-2"></InfoSquareFill>
              </div>
              <ul className="me-2">
                <li className="Fs-9 mb-1">
                  <p className="mb-0 fw-semibold">I 15 lavori in piu rapida crescita in Italia</p>
                  <p className="mb-0 text-secondary Fs-8">Notizie principali &#x25CF; 256 lettori</p>
                </li>
                <li className="Fs-9 mb-1">
                  <p className="mb-0 fw-semibold">SONDAGGIO: Cosa valuti di più in un'...</p>
                  <p className="mb-0 text-secondary Fs-8">1 giorno fa</p>
                </li>
                <li className="Fs-9 mb-1">
                  <p className="mb-0 fw-semibold">Cercare lavoro nella tecnologia</p>
                  <p className="mb-0 text-secondary Fs-8">1 giorno fa</p>
                </li>
                <li className="Fs-9 mb-1">
                  <p className="mb-0 fw-semibold">Dove sta andando la blockchain</p>
                  <p className="mb-0 text-secondary Fs-8">1 giorno fa</p>
                </li>
                <li className="Fs-9 mb-1">
                  <p className="mb-0 fw-semibold">Le città dei lavori in crescita</p>
                  <p className="mb-0 text-secondary Fs-8">2 giorni fa</p>
                </li>
              </ul>
              <div className="d-flex align-items-center mx-4 text-secondary">
                <p className="mb-0 fw-semibold">Show more</p>
                <CaretDownFill className="ms-2"></CaretDownFill>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
