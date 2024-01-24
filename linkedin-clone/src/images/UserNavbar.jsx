import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = (props) => {
  return (
    <Link to="/profile" className="d-flex flex-column  align-items-center  bord user text-decoration-none">
      <img
        className="rounded-circle shadow-4-strong resized-avatar"
        alt="avatar2"
        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
      />
      <p className="mercado-match fs-12 ">Tu</p>
    </Link>
  );
};

export default UserNavbar;
