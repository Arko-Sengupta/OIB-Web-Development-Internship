import React from "react";

const Footer = ({ CustomPackage }) => {
  return (
    <footer style={{backgroundColor: "black", color: "white", textAlign: "center", padding: "10px", boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.1);"}}>
      <p>{CustomPackage["Footer"]}</p>
    </footer>
  );
};

export default Footer;