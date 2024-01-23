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
      <h5 className="mx-2 mt-3 ">{`${user.name} ${user.surname}`}</h5>
      <div className="d-flex">
        <img src={user.image} className="icon" alt="immagine profilo utente" />
        <p>{user.title}</p>
      </div>
    </>
  ));
};

export default AsideFriends;
