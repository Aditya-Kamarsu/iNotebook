import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/noteState";
import Alert from "./components/Alert";
function App() {
  return (
    <div className="App">
      <NoteState>
      <Router>
        <Navbar />
        <Alert message= "Test alert"/> 
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
        </Routes>
        </div>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
