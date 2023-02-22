import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Player from "./pages/Player";
import Movies from "./pages/Movies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/login/signup" element={<Signup />}/>
        <Route exact path="player" element={<Player />}/>
        <Route exact path="/movies" element={<Movies />}/>
        <Route exact path="/" element={<Netflix />}/>
      </Routes>
    </BrowserRouter>
  );
}