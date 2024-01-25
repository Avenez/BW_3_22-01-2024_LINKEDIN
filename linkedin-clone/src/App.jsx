import "./App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkNav from "./components/LinkNav";
import Main from "./components/Main";
import OtherProfile from "./components/OtherProfile";
import Jobs from "./components/Jobs";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LinkNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile/:userId" element={<OtherProfile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
