import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginupForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  function Home() {
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        {/* Add home page content here */}
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
