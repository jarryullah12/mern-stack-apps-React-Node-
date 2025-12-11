<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
=======
import React, { useContext, useEffect, useState } from "react";
>>>>>>> 7c8db2b7a77958d96f0336c5d2de3263748e099b
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./Pages/Login";
<<<<<<< HEAD
const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);
=======

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);
  const [user, setUserState] = useState({});
>>>>>>> 7c8db2b7a77958d96f0336c5d2de3263748e099b

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
<<<<<<< HEAD
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
=======
        setUserState(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUserState({});
>>>>>>> 7c8db2b7a77958d96f0336c5d2de3263748e099b
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
<<<<<<< HEAD
        <Navbar />
=======
        <Navbar user={user} />
>>>>>>> 7c8db2b7a77958d96f0336c5d2de3263748e099b
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
<<<<<<< HEAD
=======

>>>>>>> 7c8db2b7a77958d96f0336c5d2de3263748e099b
