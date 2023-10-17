import "./App.css";

import Header from "./Header";

import Nav from "./Navication/Nav";

import Register from "./Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Header />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Nav />} />
        </Routes>
      </Router>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
