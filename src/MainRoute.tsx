import React, { useState, lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Navigate
} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

function MainRoute() {

    window.onpopstate = function () {
        window.history.go(-1);
    };

    const [baseName, setBaseName] = useState(process.env.REACT_APP_BASENAME ? process.env.REACT_APP_BASENAME : "");
    return (
        <Router basename={baseName}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default MainRoute;
