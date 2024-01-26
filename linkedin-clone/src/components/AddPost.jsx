import { Col, Row } from "react-bootstrap";
import sendPost from "../redux/action/sendPost";
import { useState } from "react";

const AddPost = () => {
  const [localPost, setLocalPost] = useState({
    text: "",
  });

  return (
    <>
      <Col className="">
        <Row className="postRow">
          <Col xs={1} className="me-2">
            <img
              src="https://media.gqitalia.it/photos/642e9d8bfc2b9ece8567af56/1:1/w_1079,h_1079,c_limit/therock.jpg"
              alt="profileImage"
              className=" rounded rounded-circle postImage"
            />
          </Col>
          <Col>
            <button
              className="btn btn-outline-secondary text-start rounded-pill w-100 h-100 "
              onClick={() => sendPost(localPost)}
            >
              Avvia un post
            </button>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Col>
    </>
  );
};

export default AddPost;
