import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

import { useSelector } from "react-redux";
import ModalExperiences from "./ModalExperiences";
import ModalExperiencesAdd from "./ModalExperiencesAdd";

const Experiences = (props) => {
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
              {props.userId != null ? (
                <></>
              ) : (
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
              )}
              <div>
                <ModalExperiencesAdd />
                {/* qui ci va il Botton */}
                <ModalExperiences />
              </div>
            </Col>
          </Row>

          {/* ---------------------------------------------- */}

          <Row>
            {profile.experiences.map((experience) => (
              <>
                <Row className="mt-2">
                  {/* <Col xs={1}></Col> */}
                  <Col xs={11}>
                    <Container className="d-flex border-bottom">
                      <Col xs={2} xl={1} className="me-2">
                        <img className="sizeIconEx rounded-circle" src={experience.image} alt="icona_lavoro" />
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
                        <p>{experience.description}</p>
                      </Col>
                    </Container>
                  </Col>
                </Row>
                {/* <Row>
                <Col
                xs={12}
                className=" d-flex justify-content-center"
                style={{ borderTop: "1px solid rgb(206, 199, 199)" }}
                ></Col>
              </Row> */}
              </>
            ))}
          </Row>

          {/* ---------------------------- */}
        </Col>
      </Row>
    </>
  );
};

export default Experiences;
