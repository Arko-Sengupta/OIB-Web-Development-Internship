import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "../Stylesheets/Header.css";
import Car from "./Carousel";
import Content from "./Content";

const tabComponents = {
  "Early-life": Car,
  "Career": Car,
  "Filmography": Car,
  "Business": Car,
  "Music": Car,
  "Awards": Car,
};

const Header = ({ CustomPackage }) => {
  const [activeTab, setActiveTab] = useState("Early-life");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar variant="dark" expand="lg" fixed="top" className="Header px-5">
        <Navbar.Brand>
          <h1 className="title">{CustomPackage["Header"]}</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3">
            {Object.keys(tabComponents).map((tabName) => (
              <Nav.Link
                key={tabName}
                className="pe-5"
                onClick={() => handleTabClick(tabName)}
              >
                {tabName.replace(/([a-z])([A-Z])/g, "$1 $2")}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        {Object.keys(tabComponents)
          .filter((tabName) => activeTab === tabName)
          .map((tabName) => {
            const tabData = CustomPackage[tabName]?.Carousel || {};
            return (
              <Car
                key={tabName}
                Page_Image={tabData["Image"]}
                Page_Title={tabData["Title"]}
                Page_Subtitle={tabData["Subtitle"]}
              />
            );
          })}
      </div>
      <div>
        {Object.keys(tabComponents)
          .filter((tabName) => activeTab === tabName)
          .map((tabName) => {
            const tabData = CustomPackage[tabName]?.Content || {};
            return (
              <Content
                key={tabName}
                Content_Title={tabData["Content-Title"]}
                Content_Text={tabData["Content-Text"]}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Header;