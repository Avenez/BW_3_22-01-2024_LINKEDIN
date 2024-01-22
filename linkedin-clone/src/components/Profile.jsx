import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <Row className="profileContainer">
        <Col>
          <Row className="">
            <div className="position-relative p-0 cursor">
              <input type="file" id="bgImage" hidden />
              <label htmlFor="bgImage" className="bgProfile cursor">
                <img
                  className="bgProfile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0lWaaWP-WmtxAAWkwJGAZFMyER0nyOUdsjF2d0aCap0mS1rO"
                  alt="profileBg"
                />
                <i className="bi bi-camera-fill text-primary photoBgIcon "></i>
              </label>
              <div className="">
                <input type="file" id="profileImage" hidden />
                <label htmlFor="profileImage">
                  <img
                    className="photoProfile cursor"
                    src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                    alt="profilePicture"
                  />
                </label>
              </div>
            </div>
          </Row>

          <Row className="">
            <Col>
              <Row className=" justify-content-end  ">
                <Col xs={2}>
                  <button className=" btn btn-outline-secondary  border-0 rounded-circle ">
                    <i className="bi bi-pencil fs-5"></i>
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Container className="p-3">
            <Row>
              <Col xs={12} md={8}>
                <Row className="mt-4 text-start">
                  <Col className="d-md-flex ">
                    <h2 className="me-2">ProfileName</h2>
                    <button className="d-flex align-items-center outlineButtons px-2  rounded-5  fw-bold fw-bolder py-0  ">
                      <i class="bi bi-shield-check me-1"></i>
                      <p className="Verify mb-0 p-0  ">Inizia la verifica</p>
                    </button>
                  </Col>
                </Row>
                <Row className=" text-start">
                  <Col xs={10}>
                    <p className="mb-2">Actual Job</p>
                  </Col>
                </Row>

                <Row className="d-sm-inline-block d-md-none text-start text-secondary mt-0 ">
                  <Col>
                    <p className="mb-2">Job &bull; Study</p>
                  </Col>
                </Row>
                <Row className=" text-start text-secondary mt-0 ">
                  <Col className="d-flex">
                    <p className="mb-2">City &bull;</p>{" "}
                    <Link className="ms-2 link-primary links   ">Informazioni di contatto</Link>
                  </Col>
                </Row>
                <Row className=" text-start text-secondary mt-0 ">
                  <Col>
                    <Link className="link-primary links   ">50 contatti</Link>
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
            <Row className="text-secondary mt-2 justify-content-start  ">
              <Col xs={4} md={3} className="p-0 text-start me-1 ">
                <button className="btn btn-primary rounded-4 fw-bold w-100">Disponibile per</button>
              </Col>
              <Col xs={5} md={4} className="p-0  text-center me-1">
                <button className="outlineButtons rounded-4 fw-bold w-100 ">Aggiungi sezione del profilo</button>
              </Col>
              <Col xs={2} md={1} className=" p-0 text-start">
                <button className="d-inline-block d-md-none btn btn-outline-secondary  rounded-5 fw-bold ">
                  <i class="bi bi-three-dots"></i>
                </button>
                <button className=" d-none d-md-inline-block btn btn-outline-secondary  rounded-4 fw-bold w-100">
                  Altro
                </button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
