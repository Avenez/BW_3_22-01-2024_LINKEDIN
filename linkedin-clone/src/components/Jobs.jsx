import { Col, Container, Row } from "react-bootstrap";
import JobElement from "./JobElement";

const Jobs = () => {
  return (
    <>
      <Container className="vh-100">
        <Row>
          <Col xs={2}></Col>
          <Col xs={8} className="border border-1 rounded-3">
            <h5 className="mt-4 mb-0">Le principali offerte di lavoro per te</h5>
            <p className="text-muted mt-1 subText">Sulla base del tuo profilo e della tua cronologia delle ricerche</p>
            <div className="">
              <JobElement />
            </div>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Jobs;
