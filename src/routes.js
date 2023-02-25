import React from "react";
import App from "./App";
import Movie from "./Movie";
import NewMovie from "./NewMovie";

import { Routes, Route } from "react-router-dom";

function Router() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<App />}></Route>
                <Route exact path="/Movie" element={<Movie />}></Route>
                <Route exact path="/NewMovie" element={<NewMovie />}></Route>
            </Routes>
        </div>
    );
}

export default Router;
