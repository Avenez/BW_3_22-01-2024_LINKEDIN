import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import post from "../redux/action/post";

import { Row, Col } from "react-bootstrap";

const GeneratedPost = () => {
  let results = useSelector((state) => state.post.postState);
  console.log(results);
  let isLoading = useSelector((state) => state.post.isLoading);
  console.log(isLoading);
  let resultsSlice = results.slice(0, 5);
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
              <>
                <img src={p.image} />
                <p>{p._id}</p>
              </>
            ))
          )}
        </Col>
      </Row>
    </>
  );
};

export default GeneratedPost;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import post from "../redux/action";
// import React from "react";
// import { Row, Col } from "react-bootstrap";

// const GeneratedPost = () => {
//   let results = useSelector((state) => state.post.postState);
//   let isLoading = useSelector((state) => state.post.isLoading);
//   let dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(post());
//   }, [dispatch]);

//   return (
//     <>
//       <Row>
//         <Col>
//           {isLoading ? (
//             <p>Caricamento in corso...</p>
//           ) : (
//             results.map((post, index) => (
//               <React.Fragment key={post._id}>
//                 <img src={post.user.image} alt={`Post di ${post.username}`} />
//                 <p>{post.text}</p>
//               </React.Fragment>
//             ))
//           )}
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default GeneratedPost;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import post from "../redux/action";
// import { Row, Col } from "react-bootstrap";

// const GeneratedPost = () => {
//   const dispatch = useDispatch();
//   const results = useSelector((state) => state.post.postState);
//   const isLoading = useSelector((state) => state.post.isLoading);

//   useEffect(() => {
//     dispatch(post());
//   }, [dispatch]);

//   return (
//     <>
//       <Row>
//         <Col>
//           {isLoading ? (
//             <p>Caricamento in corso...</p>
//           ) : (
//             results.map((post) => (
//               <div key={post._id}>
//                 <p>{post.text}</p>
//               </div>
//             ))
//           )}
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default GeneratedPost;
