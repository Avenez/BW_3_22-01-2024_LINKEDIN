import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import post from "../redux/action/post";

import { Row, Col } from "react-bootstrap";
import { Chat, Command, HandThumbsUp, Plus, Send, Share } from "react-bootstrap-icons";

const GeneratedPost = () => {
  let results = useSelector((state) => state.post.postState);
  console.log(results);
  let isLoading = useSelector((state) => state.post.isLoading);
  console.log(isLoading);

  let resultsSlice = results.slice(20, 28);
  console.log(resultsSlice);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(post());
  }, [dispatch]);

  return (
    <>
      <Row>
        <Col>
          {isLoading ? (
            <>
              <p>Caricamento in corso..</p>
            </>
          ) : (
            resultsSlice.map((p) => (
              <div className="bg-white mb-2 rounded border border-seondary-light">
                <div className="d-flex">
                  <img src={p.image} className="icon asideImg rounded-circle mx-2 my-1" />
                  <div>
                    <p className="fw-bold ms-1 mt-1">{p.username}</p>
                    <p className="ms-1 text-secondary">{p.user.title}</p>
                  </div>
                  <p className="ms-auto me-2 mt-1 text-primary fw-bold ">Segui</p>
                </div>
                <p className="mx-2">{p.text}</p>
                <hr />
                <div className="d-flex justify-content-between mx-2 align-items-center text-secondary">
                  <p className="commenti-home">
                    <HandThumbsUp className="me-1 " />
                    Consiglia
                  </p>
                  <p className="commenti-home">
                    <Chat className="me-1" />
                    Commenta
                  </p>
                  <p className="commenti-home">
                    <Share className="me-1" />
                    Diffondi post
                  </p>
                  <p className="commenti-home">
                    <Send className="me-1" />
                    Invia
                  </p>
                </div>
              </div>
            ))
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="my-4 text-center">
            <span className="altri-post rounded-pill fw-bold">Vedi altri post</span>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default GeneratedPost;
