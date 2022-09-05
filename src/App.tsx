import React from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import {LoginPage} from "./Pages/LoginPage";
import {RegisterPage} from "./Pages/RegisterPage";
import {NavBar} from "./components/NavBar";

function App() {

    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Routes>

        </div>
    );
}

export default App;
