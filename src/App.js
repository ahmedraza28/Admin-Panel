import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Medicines from "./pages/Medicines";
import Account from "./pages/Account";
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/signin" element={<AdminLogin/>}></Route>
      <Route exact path="/recipients" element={<Settings/>}></Route>
      <Route exact path="/account" element={<Account/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
