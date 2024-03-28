import React, { useState, lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Navigate
} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { PrivacyPolicy } from "./pages/PravicyPolicy";
import { TermAndConditions } from "./pages/TermAndConditions";
import Layout from "./layouts/Layout";

function MainRoute() {

    window.onpopstate = function () {
        window.history.go(-1);
    };

    const [baseName, setBaseName] = useState(process.env.REACT_APP_BASENAME ? process.env.REACT_APP_BASENAME : "");
    const mainPage = process.env.REACT_APP_MAIN_PAGE ? process.env.REACT_APP_MAIN_PAGE : "";
    return (
        <Router basename={baseName}>
            <Routes>
                {/* <Route element={<Layout />}> */}
                {mainPage == "" && (
                    <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
                )}
                {mainPage == "tnc" && (
                    <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><TermAndConditions /></Suspense>} />
                )}
                {mainPage == "pp" && (
                    <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><PrivacyPolicy /></Suspense>} />
                )}
                {/* </Route> */}

            </Routes>
        </Router>
    );
}

export default MainRoute;
