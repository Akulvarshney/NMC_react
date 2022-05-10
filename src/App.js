import Footer from "./components/homePage/Footer/Footer";
import Front from "./components/homePage/Front-Page/Front";
import Header from "./components/homePage/Header/Header";
import Navbar from "./components/homePage/Navbar/Navbar";
import Service from "./components/homePage/Services/Service";
import Team from "./components/homePage/Team/Team";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Front />
      <Service />
      <Team />
      <Footer />
    </>
  );
}

export default App;
