import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Eyes from "../images/icon_Main/Eyes";
import { PlusLg } from "react-bootstrap-icons";

const Experiences = () => {
  return (
    <>
      <Row className="profileContainer d-flex mt-2">
        <Col xs={12} className="">
          <Row className="ms-1 ">
            <Col className="d-flex justify-content-between mt-4">
              <h5 className="" style={{ lineHeight: 1.8 }}>
                Esperienza
              </h5>
              <div>
                <PlusLg className="plus me-3 " />
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
              </div>
            </Col>
          </Row>

          <Row>
            <Row>
              <Col xs={12}>
                <Container className="d-flex">
                  <Col xs={1}>
                    <img
                      className="sizeIconEx"
                      src="https://static.wixstatic.com/media/61a791_04fd491499d5492bb7d710db50ad367f~mv2.png/v1/fit/w_2500,h_1330,al_c/61a791_04fd491499d5492bb7d710db50ad367f~mv2.png"
                      alt="icona_lavoro"
                    />
                  </Col>
                  <Col xs={10}>
                    <span className="ps-0">
                      <b>Laboratorio creativo </b>
                      <b>- Artista</b>
                    </span>
                    <p className="colorGray mb-0">giu 2021 · 1 mese</p>
                    <p className="colorGray">Milano</p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, quaerat modi dolores laudantium,
                      corporis neque voluptatibus, autem delectus perspiciatis dicta pariatur excepturi eos quam ipsam
                      saepe! Odio sit rerum dolores?
                    </p>
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
            ></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Experiences;
