import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import RandomBook from "./RandomBook";
import RandomBookNotRegistered from "./RandomBookNotRegistered";
import Home from "./Home";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/randombook' element={<RandomBook />} />
                <Route path='/randombooknotreg' element={<RandomBookNotRegistered />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;