import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Profile";
import Analisi from "./Analisi";
import Aside from "./Aside";
import Risorse from "./Risorse";

const Main = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={10} md={8}>
            <Profile />
            <Analisi />
            <Risorse />
          </Col>
          <Col>
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
