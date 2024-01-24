import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

import { useSelector } from "react-redux";
import ModalExperiences from "./ModalExperiences";
import ModalExperiencesAdd from "./ModalExperiencesAdd";

const Experiences = () => {
  const profile = useSelector((state) => state.profile);

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
                <ModalExperiencesAdd />
                {/* qui ci va il Botton */}
                <ModalExperiences />
              </div>
            </Col>
          </Row>

          {/* ---------------------------------------------- */}

          {profile.experiences.map((experience) => (
            <>
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
                          <b>{experience.company} </b>
                          <b>- {experience.role}</b>
                        </span>
                        <p className="colorGray mb-0">
                          {" "}
                          {new Date(experience.startDate).toISOString().slice(0, 7).toLocaleString("it")}
                        </p>
                        <p className="colorGray">{experience.area}</p>
                        <p>{profile.description}</p>
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
            </>
          ))}

          {/* ---------------------------- */}
        </Col>
      </Row>
    </>
  );
};

export default Experiences;
