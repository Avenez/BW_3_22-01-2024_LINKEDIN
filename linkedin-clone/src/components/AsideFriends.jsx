import friends from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AsideFriends = () => {
  let results = useSelector((state) => state.friends.friendsState);
  let resultsSlice = results.slice(0, 5);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(friends());
  }, [dispatch]);
  // const dispatch = useDispatch()
  return resultsSlice.map((user) => (
    <>
      <div className="d-flex align-items-center">
        <img src={user.image} className="icon mx-2 rounded-pill" alt="immagine profilo utente" />
        <div>
          <h6 className="mx-2 mt-3 ">{`${user.name} ${user.surname}`}</h6>
          <p className="mx-2">{user.title}</p>
        </div>
      </div>
    </>
  ));
};

export default AsideFriends;
