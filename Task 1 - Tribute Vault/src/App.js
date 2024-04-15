import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CustomPackage from "./package-custom.json";

const App = () => {
  return (
    <>
      <Header CustomPackage={CustomPackage} />
      <Footer CustomPackage={CustomPackage} />
    </>
  );
}

export default App;