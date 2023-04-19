import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Navbar from './Navbar';
import Profile from "./Profile";
//import RandomBook from "./RandomBook";
import Registration from "./Registration";
import RandomBookNotRegistered from "./RandomBookNotRegistered";
import Booklist from "./Booklist";

function App() {
    let payload = {};

    return (
        <BrowserRouter>
        <Navbar payload = {payload}/>
            <Routes>
                <Route path='/' element={<Home payload = {payload}/>} />
                <Route path='/login' element={<Login payload = {payload} />} />
                <Route path='/registration' element={<Registration payload = {payload}/>} />
                <Route path='/randombooknotreg' element={<RandomBookNotRegistered payload = {payload}/>} />
                <Route path='/profile' element={<Profile payload = {payload}/>} />
                <Route path='/booklist' element={<Booklist payload = {payload}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;