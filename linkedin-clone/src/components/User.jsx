import { Col, Container, Row } from "react-bootstrap";
import Profile from "./Profile";
import Analisi from "./Analisi";
import Aside from "./Aside";
import Attività from "./Attività";
import Info from "./Info";
import Experiences from "./Experience";

const User = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={10} md={8}>
            <Profile />
            <Analisi />
            <Info />
            <Attività />
            <Experiences />
          </Col>
          <Col>
            <Aside />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
