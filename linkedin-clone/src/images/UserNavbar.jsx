import React from "react";

const UserNavbar = (props) => {
  return (
    <div className="d-flex flex-column  align-items-center  bord user">
      <img
        className="rounded-circle shadow-4-strong resized-avatar"
        alt="avatar2"
        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
      />
      <p className="mercado-match fs-12 ">Tu</p>
    </div>
  );
};

export default UserNavbar;
