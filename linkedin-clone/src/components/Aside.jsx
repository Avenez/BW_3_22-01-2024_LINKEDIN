import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Aside = () => {
  return (
    <Row>
      <Col>
        <div>
          <Row>
            <Col>
              <div className="bg-white mb-2 rounded border border-seondary-light">
                <div>
                  <div className="d-flex justify-content-between mx-2 mt-2">
                    <h5>Lingua del profilo</h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </div>
                  <p className="mx-2">Italiano</p>
                </div>

                <hr />

                <div>
                  <div className="d-flex justify-content-between mx-2 mt-2">
                    <h5>Public profile &amp; URL</h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </div>
                  <p className="mx-2">www.linkedin.com/in/utente-epicode-743b6b178</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="gx-0 px-0">
            <img
              src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
              alt="immagine linkedin"
              className=" rounded border border-seondary-light"
            />
          </Row>
          <Row>
            <Col>
              <div className="bg-white mt-2 rounded border border-seondary-light">
                <h5 className="mx-2 mt-3 ">Altri profili consultati </h5>
                <div className="d-flex">
                  <img src="" alt="immagine profilo utente" />
                  <p>Occupazione(title)</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Aside;
