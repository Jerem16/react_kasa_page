import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/header";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import Error404 from "./pages/Error404/Error404";

import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/react_kasa_page/a_propos" element={<About />} />
                <Route
                    path="/react_kasa_page/logement/:id"
                    element={<Logement />}
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
