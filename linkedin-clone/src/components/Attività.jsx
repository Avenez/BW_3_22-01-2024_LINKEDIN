import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Eyes from "../images/icon_Main/Eyes";

const Attività = () => {
  return (
    <>
      <Row className="profileContainer d-flex mt-2">
        <Col xs={12} className="">
          <Row className="ms-1">
            <Col>
              <h5 className="mt-4" style={{ lineHeight: 0.8 }}>
                Attività
              </h5>
              <Eyes />
              <span className="colorGray">Solo per te</span>
            </Col>
          </Row>

          <Row>
            <Row>
              <Col xs={8}>
                <Container className="d-flex ps-3 pt-2">
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
            <Col
              xs={12}
              className=" d-flex justify-content-center"
              style={{ borderTop: "1px solid rgb(206, 199, 199)" }}
            >
              <p>Mostra tutte le analisi</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Attività;
