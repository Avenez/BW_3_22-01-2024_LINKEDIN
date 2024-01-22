import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Profile";

const Main = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={10} md={8}>
            <Profile />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
