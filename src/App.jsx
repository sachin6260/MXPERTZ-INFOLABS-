import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryDetails from "./pages/StoryDetails";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/story/:id" element={<StoryDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
