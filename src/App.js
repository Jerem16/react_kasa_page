import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/header";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import Error from "./pages/Error/Error";

import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/react_kasa_page/" element={<Home />} />
                <Route path="/react_kasa_page/a_propos" element={<About />} />
                <Route
                    path="/react_kasa_page/logement/:id"
                    element={<Logement />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
