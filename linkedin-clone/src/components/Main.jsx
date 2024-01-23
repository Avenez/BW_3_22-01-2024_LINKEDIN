import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Profile";
import Aside from "./Aside";
import ProfileFooter from "./ProfileFooter";

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
      <ProfileFooter />
    </>
  );
};

export default Main;
