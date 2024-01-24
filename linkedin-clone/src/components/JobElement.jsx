import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobElement = () => {
  return (
    <>
      <Row className="mt-2">
        <Col xs={11}>
          <Container className="d-flex border-bottom">
            <Col xs={2} xl={1} className="me-2">
              <img
                className="sizeIconEx rounded-circle"
                src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                alt="icona_lavoro"
              />
            </Col>
            <Col xs={10}>
              <Link className="ps-0 text-decoration-none mb-0">
                <h6 className="mb-0">Job title</h6>
              </Link>
              <p className="mb-0 mt-0">company_name</p>
              <p className="colorGray">candidate_required_location</p>
              <div className="d-flex align-items-baseline">
                <i class="bi bi-radar fs-4 me-2 text-success "></i>
                <p>Selezione attiva </p>
              </div>
            </Col>
            <Col>asd</Col>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default JobElement;
