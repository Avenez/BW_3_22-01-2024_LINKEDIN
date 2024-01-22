import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Profile";
import Analisi from "./Analisi";
import Aside from "./Aside";

const Main = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={10} md={8} className="mt-4">
            <Profile />
            <Analisi />
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
