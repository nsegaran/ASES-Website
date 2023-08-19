import "./App.css";
import Home from "./pages/Home Page/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./pages/Team Page/Team.jsx";
import Bootcamp from "./pages/Bootcamp Page/Bootcamp.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        position: "absolute",
        overflow: "auto",
        width: "100%",
        height: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/team" element={<Team />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
