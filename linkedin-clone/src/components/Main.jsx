import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Profile";
import Aside from "./Aside";

const Main = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={10} md={8}>
            <Profile />
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
