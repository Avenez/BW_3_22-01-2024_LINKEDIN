import React from "react";
import { ReactComponent as LinkedIn_icon } from "../images/LinkedIn_icon.svg";
import { HouseDoorFill } from "react-bootstrap-icons";
import LogoNet from "../images/LogoNet";
import LogoJob from "../images/LogoJob";
import LogoMsn from "../images/LogoMsn";
import LogoHome from "../images/LogoHome";
import UserNavbar from "../images/UserNavbar";
import LogoNews from "../images/LogoNews";
import LogoEmpl from "../images/LogoEmpl";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";

function LinkNav() {
  return (
    <Navbar className="bg-white sticky-top py-0">
      <Container className="">
        <div className>
          <LinkedIn_icon className="icon me-3 py-0" />
          <input type="text" id="lname" name="lname" placeholder="Cerca" className="inputNav py-0" />
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <LogoHome />
          <LogoNet />
          <LogoJob />
          <LogoMsn />
          <LogoNews />
          <UserNavbar />
          <LogoEmpl />
        </div>

        <a href="#login">Prova Premium per 0 EUR</a>
      </Container>
    </Navbar>
  );
}

export default LinkNav;
