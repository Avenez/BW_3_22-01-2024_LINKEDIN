import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Eyes from "../images/icon_Main/Eyes";
import LogoNet from "../images/Icon_Nav/LogoNet";

const Analisi = () => {
  return (
    <>
      <Row className="profileContainer d-flex">
        <Col xs={12} className="ms-3">
          <Row>
            <Col>
              <h5 className="mt-4" style={{ lineHeight: 0.8 }}>
                Analisi
              </h5>
              <Eyes />
              <span>Lorem</span>
            </Col>
          </Row>

          <Row>
            <Row>
              <Col xs={4}>
                <Container className="d-flex">
                  <Col xs={2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="#666666"
                      width="22"
                      height="22"
                      focusable="false"
                    >
                      <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
                    </svg>
                  </Col>
                  <Col xs={10}>
                    <span className="ps-0">
                      <b>Tre visualizzazioni del profilo</b>
                    </span>
                    <p>Scopri chi ha visitato il tuo profilo</p>
                  </Col>
                </Container>
              </Col>
              <Col xs={4}>
                <Container className="d-flex">
                  <Col xs={2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="#666666"
                      width="22"
                      height="22"
                      focusable="false"
                    >
                      <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
                    </svg>
                  </Col>
                  <Col xs={10}>
                    <span className="ps-0">
                      <b>Tre visualizzazioni del profilo</b>
                    </span>
                    <p>Scopri chi ha visitato il tuo profilo</p>
                  </Col>
                </Container>
              </Col>
              <Col xs={4}>
                <Container className="d-flex">
                  <Col xs={2}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="#666666"
                      width="22"
                      height="22"
                      focusable="false"
                    >
                      <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
                    </svg>
                  </Col>
                  <Col xs={10}>
                    <span className="ps-0">
                      <b>Tre visualizzazioni del profilo</b>
                    </span>
                    <p c>Scopri chi ha visitato il tuo profilo</p>
                  </Col>
                </Container>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col xs={12} className="ms-3 d-flex justify-content-center">
              <p>Mostra tutte le analisi</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Analisi;
