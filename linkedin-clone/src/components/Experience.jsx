import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import { useSelector } from "react-redux";
import ModalExperiences from "./ModalExperiences";
// import ModalExperiencesAdd from "./ModalExperiencesAdd";

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
                  {/* <ModalExperiencesAdd /> */}
                  {/* qui ci va il Botton */}
                </div>
              )}
            </Col>
          </Row>

          {/* ---------------------------------------------- */}

          <Row>
            {profile.experiences.map((experience) => (
              <>
                <Row key={experience._id} className="mt-2">
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
                      <Col>
                        {props.userId != null ? (
                          <></>
                        ) : (
                          <ModalExperiences
                            company={experience.company}
                            role={experience.role}
                            area={experience.area}
                            description={experience.description}
                            _id={experience.id}
                            key={experience._id}
                          />
                        )}
                      </Col>
                    </Container>
                  </Col>
                </Row>
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
