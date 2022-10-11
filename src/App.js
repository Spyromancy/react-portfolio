import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Works from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  const [viewing, setViewing] = useState("About");

  return (
    <div>
      <Nav viewing={viewing} setViewing={setViewing}></Nav>
      <main>
        {viewing === "About" && <About></About>}
        {viewing === "Work" && <Works></Works>}
        {viewing === "Contact" && <Contact></Contact>}
        {viewing === "Resume" && <Resume></Resume>}
      </main>
      <Footer viewing={viewing}></Footer>
    </div>
  );
}

export default App;
