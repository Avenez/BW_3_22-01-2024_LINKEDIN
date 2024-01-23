import "./App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkNav from "./components/LinkNav";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LinkNav />
        <Routes>
          <Route path="" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
