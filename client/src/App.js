import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Login from "./Login";
import Registration from "./Registration";
import RandomBook from "./RandomBook";
import RandomBookNotRegistered from "./RandomBookNotRegistered";
import Home from "./Home";
import Profile from "./Profile";


function App() {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/randombook' element={<RandomBook />} />
                <Route path='/randombooknotreg' element={<RandomBookNotRegistered />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;