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
    <Navbar className="bg-white sticky-top pt-0">
      <Container className="">
        <LinkedIn_icon className="icon" />
        <Form className=" ps-3 ">
          <Form.Control type="search" placeholder="Cerca" className="myform" aria-label="Search" />
        </Form>
        <Container className="d-flex justify-content-center ">
          <LogoHome />
          <LogoNet />
          <LogoJob />
          <LogoMsn />
          <LogoNews />
          <UserNavbar />
          <LogoEmpl />
        </Container>

        <a href="#login">Prova Premium per 0 EUR</a>
      </Container>
    </Navbar>
  );
}

export default LinkNav;