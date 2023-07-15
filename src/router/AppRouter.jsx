import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/Detail/Detail";
import Home from "../pages/Home";
import Account from "../components/Account/Account";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Departments from "../components/Departmens/Departments";
import LogIn from "../components/Login/Logİn";
import SignUp from "../components/Login/Signup";


const AppRouter = ({ universities }) => {
  return (
    <BrowserRouter>
      <Navbar className="" />

      <Routes>
        <Route path="/" element={<Home universities={universities} />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/universities/:id"
          element={<Detail universities={universities} />}
        />
        <Route path="/departmants" element={<Departments />} />
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/logout" element={<SignUp/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
