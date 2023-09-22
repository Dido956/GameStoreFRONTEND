import './App.css';
import React, {useState, useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from "./Layout/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/adduser" element={<AddUser/>}/>
                        <Route path="/edituser/:id" element={<EditUser/>}/>
                        <Route path="/viewuser/:id" element={<ViewUser/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App;
