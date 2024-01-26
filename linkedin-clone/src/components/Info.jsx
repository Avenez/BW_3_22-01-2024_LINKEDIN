import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Eyes from "../images/icon_Main/Eyes";

const Info = () => {
  return (
    <>
      <Row className="profileContainer d-flex mt-2">
        <Col xs={12} className="">
          <Row className="ms-1">
            <Col>
              <h5 className="mt-4" style={{ lineHeight: 0.8 }}>
                Informazioni
              </h5>
            </Col>
          </Row>

          <Row>
            <Row>
              <Col xs={12}>
                <Container className="d-flex ps-3 pt-2">
                  <Col xs={12}>
                    <p>
                      Sviluppatore appassionato con oltre 5 anni di esperienza nella creazione di soluzioni software
                      innovative. Specializzato nello sviluppo full-stack, con competenze approfondite in tecnologie
                      front-end come React e Angular, e conoscenze avanzate in back-end con Node.js e MongoDB. Proattivo
                      nel rimanere aggiornato sulle ultime tendenze e best practices nel mondo dello sviluppo. Abile nel
                      tradurre le esigenze aziendali in codice efficiente e performante. Determinato a contribuire al
                      successo dei progetti attraverso la mia dedizione all'eccellenza tecnica e alla collaborazione
                      efficace in team.
                    </p>
                  </Col>
                </Container>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Info;
