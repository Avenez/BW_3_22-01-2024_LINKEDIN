import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalProfile from "./ModalProfile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileFetch, experiencesFetch, updateProfile } from "../redux/action/profile";

const Profile = () => {
  const profile = useSelector((state) => state.profile);
  const id = "6551e7bbc55e7e0018f83bfb";
  const dispatch = useDispatch();

  // --------- Just Update profile

  const [localProfile, setLocalProfile] = useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
    image: "", // SERVER GENERATED, modificabile
    createdAt: "", // SERVER GENERATED
    updatedAt: "", // SERVER GENERATED
    __v: "", // SERVER GENERATED
    _id: "", // SERVER GENERATED
  });

  const handleUpdateProfile = () => {
    dispatch(updateProfile(localProfile));
    console.log(localProfile);
  };

  // ---------------------------------

  // -------IMAGE
  const handleImageChange = (e) => {
    const file = e.target.files[0];
  };

  useEffect(() => {
    dispatch(profileFetch(id));
    dispatch(experiencesFetch(id));
    setLocalProfile(profile);
  }, [dispatch]);

  return (
    <>
      <Row className="profileContainer">
        <Col>
          <Row className="">
            <div className="position-relative p-0 cursor">
              <input type="file" id="bgImage" hidden />
              <label htmlFor="bgImage" className="bgProfile cursor ">
                <img
                  className="bgProfile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0lWaaWP-WmtxAAWkwJGAZFMyER0nyOUdsjF2d0aCap0mS1rO"
                  alt="profileBg"
                />
                <i className="bi bi-camera-fill text-primary photoBgIcon outlineButtonsProfile "></i>
              </label>
              <div className="">
                <input type="file" id="profileImage" hidden />
                <label htmlFor="profileImage">
                  <img className="photoProfile cursor" src={profile.image} alt="profilePicture" />
                </label>
              </div>
            </div>
          </Row>

          <Row className="">
            <Col>
              <Row className=" justify-content-end  ">
                <Col xs={2}>
                  <ModalProfile
                    localProfile={localProfile}
                    handleUpdateProfile={handleUpdateProfile}
                    setLocalProfile={setLocalProfile}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Container className="p-3">
            <Row>
              <Col xs={12} md={8}>
                <Row className="mt-4 text-start">
                  <Col className="d-md-flex ">
                    <h2 className="me-2">{`${profile.name} ${profile.surname}`}</h2>
                    <button className="d-flex align-items-center outlineButtons px-2  rounded-5  fw-bold fw-bolder py-0  ">
                      <i class="bi bi-shield-check me-1"></i>
                      <p className="Verify mb-0 p-0  ">Inizia la verifica</p>
                    </button>
                  </Col>
                </Row>
                <Row className=" text-start">
                  <Col xs={10}>
                    <p className="mb-2">{profile.title}</p>
                  </Col>
                </Row>

                <Row className="d-sm-inline-block d-md-none text-start text-secondary mt-0 ">
                  {/* <Col>
                    <p className="mb-2">Job &bull; Study</p>
                  </Col> */}
                </Row>
                <Row className=" text-start text-secondary mt-0 ">
                  <Col className="d-flex">
                    <p className="mb-2">{profile.area} &bull;</p>{" "}
                    <Link className="ms-2 link-primary links   ">{profile.email}</Link>
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
                <button className="outlineButtons rounded-4 fw-bold w-100 m-auto  ">
                  Aggiungi sezione del profilo
                </button>
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
