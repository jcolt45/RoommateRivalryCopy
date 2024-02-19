import React from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import Home from "./pages/Home";
import Roomates from "./pages/Roomates";
import Chores from "./pages/Chores";
import Points from "./pages/Points";

function MyApp() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/chores":
      Component = Chores;
      break;
    case "/roomates":
      Component = Roomates;
      break;
    case "/points":
      Component = Points;
      break;
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default MyApp;
